import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PunchBuilding = props => {
  const [punchBuildingData, setPunchBuildingData] = useState([{}])

  const getPunchBuildingData = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api/Building/' + props.selectedFacility
    )
    setPunchBuildingData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getPunchBuildingData()
  }, [props.selectedFacility])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Building:</p>
            <select
              className="building"
              onChange={e => props.updateBuildingId(e.target.value)}
            >
              <option value="">SELECT A FACILITY</option>
              {punchBuildingData.map((info, id) => {
                return (
                  <option value={info.id} key={id}>
                    {info.buildingName}
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

export default PunchBuilding
