import React, { useState, useEffect } from 'react'
import Facility from './Facility'
import Building from './Building'
import Scope from './Scope'
import Responsible from './Responsible'
import CurrentList from './CurrentList'
import ProgressBar from './ProgressBar'
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
            <Responsible />
          </li>
        </ul>
      </section>
      <CurrentList />
    </>
  )
}

export default Dashboard
