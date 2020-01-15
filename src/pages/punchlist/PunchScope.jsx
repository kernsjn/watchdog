import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PunchScope = () => {
  const [punchScopeData, setPunchScopeData] = useState([])

  const getPunchScopeData = async () => {
    const resp = await axios.get('https://localhost:5001/api/scope/')
    setPunchScopeData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getPunchScopeData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Scope of Work</p>
            <select className="category">
              {punchScopeData.map((info, id) => {
                return (
                  <option value={info.description} key={id}>
                    {info.description}
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

export default PunchScope
