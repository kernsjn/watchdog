import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PunchAssigned = () => {
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
            <select className="ball-in-court">
              {punchAssignedData.map((info, id) => {
                return (
                  <option value={info.assignRole} key={id}>
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
