import React, { useState, useEffect } from 'react'
import Facility from '../components/Facility'
import Building from '../components/Building'
import Scope from '../components/Scope'
import Assigned from '../components/Assigned'
import CurrentList from '../components/CurrentList'
import ProgressBar from '../components/ProgressBar'
import axios from 'axios'
import Config from '../components/Config'

const Dashboard = props => {
  const [selectedFacility, setSelectedFacility] = useState()
  const [data, setData] = useState({})
  const [punchItems, setPunchItems] = useState([])

  const getOneFacility = async () => {
    const resp = await axios.get(`${Config.API_URL}/facility`)
    setSelectedFacility(resp.data)
  }

  useEffect(() => {
    getOneFacility()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredItems = async () => {
    console.log({ data })
    if (data.facilityId && data.buildingId && data.scopeId && data.assignId) {
      const resp = await axios.get(
        `${Config.API_URL}api/punchListItem/list?facilityId=${data.facilityId}&buildingId=${data.buildingId}&scopeId=${data.scopeId}&assignId=${data.assignId}`
      )
      console.log('here', resp.data)
      setPunchItems(resp.data)
    }
  }
  useEffect(() => {
    filteredItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.facilityId, data.buildingId, data.scopeId, data.assignId])

  return (
    <>
      <ProgressBar />
      <section className="dropdown-list">
        <ul id="dropdown-list">
          <li>
            <Facility
              setSelectedFacility={selectFacility => {
                setSelectedFacility(selectFacility)
                setData(prev => {
                  return {
                    ...prev,
                    facilityId: parseInt(selectFacility),
                  }
                })
              }}
            />
          </li>
          <li>
            <Building
              selectedFacility={selectedFacility}
              updateBuildingId={buildingId => {
                setData(prev => {
                  return {
                    ...prev,
                    buildingId: parseInt(buildingId),
                  }
                })
              }}
            />
          </li>
          <li>
            <Scope
              prepDashScope={scopeId => {
                setData(prev => {
                  return {
                    ...prev,
                    scopeId: parseInt(scopeId),
                  }
                })
              }}
            />
          </li>
          <li>
            <Assigned
              prepDashAssigned={assignId => {
                setData(prev => {
                  return {
                    ...prev,
                    assignId: parseInt(assignId),
                  }
                })
              }}
            />
          </li>
        </ul>
      </section>
      <CurrentList punchItems={punchItems} />
    </>
  )
}

export default Dashboard
