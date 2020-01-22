import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../../components/Config'

const PunchBuilding = props => {
  const [punchBuildingData, setPunchBuildingData] = useState([{}])

  const getPunchBuildingData = async () => {
    const resp = await axios.get(
      `${Config.API_URL}api/building/` + props.selectedFacility
    )
    setPunchBuildingData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getPunchBuildingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
             <option value=""></option>
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
