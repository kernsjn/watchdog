import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Assigned = () => {
  const [assignedData, setAssignedData] = useState([])

  const getAssignedData = async () => {
    const resp = await axios.get('https://localhost:5001/api/assignperson/')
    setAssignedData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getAssignedData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels-2">Ball-in-Court</p>
            <select className="ball-in-court">
              {assignedData.map((info, id) => {
                return (
                  <option value={info.role} key={id}>
                    {info.role}
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

export default Assigned