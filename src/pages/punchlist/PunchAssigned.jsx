import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PunchAssigned = props => {
  const [punchAssignedData, setPunchAssignedData] = useState([])

  const getPunchAssignedData = async () => {
    const resp = await axios.get('https://localhost:5001/api/assignperson/')
    setPunchAssignedData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getPunchAssignedData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels-2">Assigned To:</p>
            <select
              className="ball-in-court"
              onChange={e => props.prepPunchAssigned(e.target.value)}
            >
              <option value="">SELECT TO ASSIGN WORK</option>
              {punchAssignedData.map((info, id) => {
                return (
                  <option value={info.id} key={id}>
                    {info.assignRole}
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

export default PunchAssigned
