import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Facility = props => {
  const [facilityData, setFacilityData] = useState([{}])

  const getFacilityData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Facility')
    setFacilityData(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getFacilityData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Campus / Facility Name</p>
            <select
              className="facility"
              name="facilityName"
              onChange={e => props.setSelectedFacility(e.target.value)}
            >
              <option value="">SELECT A FACILITY</option>
              {facilityData.map((info, id) => {
                return (
                  <option value={info.id} key={id}>
                    {info.facilityName}
                  </option>
                )
              })}
            </select>
          </section>
        </div>
      </main>
    </>
  )
}

export default Facility
