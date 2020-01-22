import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../../components/Config'

const PunchRequestor = props => {
  const [punchRequestorData, setPunchRequestorData] = useState([])

  const getPunchRequestorData = async () => {
    const resp = await axios.get(`${Config.API_URL}api/requestor`)
    setPunchRequestorData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getPunchRequestorData()
  }, [])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels-2">Requested By:</p>
            <select
              className="ball-in-court"
              onChange={e => props.prepPunchRequestor(e.target.value)}
            >
              <option value=""></option>
              {punchRequestorData.map((info, id) => {
                return (
                  <option value={info.id} key={id}>
                    {info.requestRole}
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

export default PunchRequestor
