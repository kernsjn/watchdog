import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../../components/Config'

const PunchScope = props => {
  const [punchScopeData, setPunchScopeData] = useState([])

  const getPunchScopeData = async () => {
    const resp = await axios.get(`${Config.API_URL}api/scope`)
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
            <p className="labels">Scope of Work:</p>
            <select
              className="category"
              onChange={e => props.prepPunchScope(e.target.value)}
            >
              <option value=""></option>
              {punchScopeData.map((info, id) => {
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

export default PunchScope
