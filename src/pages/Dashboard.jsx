import React, { useState, useEffect } from 'react'
import Facility from '../components/Facility'
import Building from '../components/Building'
import Scope from '../components/Scope'
import Assigned from '../components/Assigned'
import CurrentList from '../components/CurrentList'
import ProgressBar from '../components/ProgressBar'
import axios from 'axios'

const Dashboard = props => {
  const [selectedFacility, setSelectedFacility] = useState()
  const [data, setData] = useState({})
  const [punchlistItems, setPunchlistItems] = useState([])

  const getOneFacility = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Facility`)
    setSelectedFacility(resp.data)
  }

  useEffect(() => {
    getOneFacility()
  }, [])

  const filteredItems = async () => {
    console.log({ data })
    if (data.facilityId && data.buildingId && data.scopeId && data.assignId) {
      const resp = await axios.get(
        `https://localhost:5001/api/PunchListItem/list?facilityId=${data.facilityId}&buildingId=${data.buildingId}&scopeId=${data.scopeId}&assignId=${data.assignId}`
      )
      console.log('here', resp.data)
      setPunchlistItems(resp.data)
    }
  }
  useEffect(() => {
    filteredItems()
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
      <CurrentList punchlistItems={punchlistItems} />
    </>
  )
}

export default Dashboard
