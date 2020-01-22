import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from './Config'

const Building = props => {
  const [buildingData, setBuildingData] = useState([{}])

  const getBuildingData = async () => {
    const resp = await axios.get(
      `${Config.API_URL}api/building/` + props.selectedFacility
    )
    setBuildingData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getBuildingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <option value=""></option>
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
