import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Assigned = props => {
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
            <select
              className="ball-in-court"
              onChange={e => props.prepDashAssigned(e.target.value)}
            >
              <option value=""></option>
              {assignedData.map((info, id) => {
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

export default Assigned
