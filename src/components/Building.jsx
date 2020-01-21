import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Building = props => {
  const [buildingData, setBuildingData] = useState([{}])

  const getBuildingData = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api/Building/' + props.selectedFacility
    )
    setBuildingData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getBuildingData()
  }, [props.selectedFacility])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Building Name / Number</p>
            <select
              className="building"
              onChange={e => props.updateBuildingId(e.target.value)}
            >
              <option value="">SELECT A BUILDING</option>
              {buildingData.map((info, id) => {
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

export default Building
