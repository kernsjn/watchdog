import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../../components/Config'

const PunchAssigned = props => {
  const [punchAssignedData, setPunchAssignedData] = useState([])

  const getPunchAssignedData = async () => {
    const resp = await axios.get(`${Config.API_URL}api/assignPerson`)
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
              <option value=""></option>
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
