import React, { useState, useEffect } from 'react'
import Facility from '../components/Facility'
import Building from '../components/Building'
import Scope from '../components/Scope'
import Assigned from '../components/Assigned'
import CurrentList from '../components/CurrentList'
import ProgressBar from '../components/ProgressBar'
import axios from 'axios'

const Dashboard = () => {
  const [selectedFacility, setSelectedFacility] = useState()

  const getOneFacility = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Facility`)
    setSelectedFacility(resp.data)
  }

  useEffect(() => {
    getOneFacility()
  }, [])

  return (
    <>
      <ProgressBar />
      <section className="dropdown-list">
        <ul id="dropdown-list">
          <li>
            <Facility setSelectedFacility={setSelectedFacility} />
          </li>
          <li>
            <Building selectedFacility={selectedFacility} />
          </li>
          <li>
            <Scope />
          </li>
          <li>
            <Assigned />
          </li>
        </ul>
      </section>
      <CurrentList />
    </>
  )
}

export default Dashboard
