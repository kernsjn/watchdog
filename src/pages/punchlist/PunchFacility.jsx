import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PunchFacility = props => {
  const [punchFacilityData, setPunchFacilityData] = useState([{}])

  const getPunchFacilityData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Facility')
    setPunchFacilityData(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getPunchFacilityData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Facility:</p>
            <select
              className="facility"
              name="facilityName"
              onChange={e => props.setSelectedFacility(e.target.value)}
            >
              <option value="">SELECT A FACILITY</option>
              {punchFacilityData.map((info, id) => {
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

export default PunchFacility
