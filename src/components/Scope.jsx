import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Scope = props => {
  const [scopeData, setScopeData] = useState([])

  const getScopeData = async () => {
    const resp = await axios.get('https://localhost:5001/api/scope/')
    setScopeData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getScopeData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Scope of Work</p>
            <select
              className="category"
              onChange={e => props.prepDashScope(e.target.value)}
            >
              <option value=""></option>
              {scopeData.map((info, id) => {
                return (
                  <option value={info.id} key={id}>
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

export default Scope
