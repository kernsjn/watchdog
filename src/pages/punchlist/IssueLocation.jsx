import React, { useState, useEffect } from 'react'
import axios from 'axios'

const IssueLocation = props => {
  const [issueLocationData, setIssueLocationData] = useState([{}])

  const getIssueLocationData = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api//' + props.selectedFacility
    )
    setIssueLocationData(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getIssueLocationData()
  }, [props.selectedFacility])

  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Building:</p>
            <input className="building">
              {punchBuildingData.map((info, id) => {
                return (
                  <option value={info.buildingName} key={id}>
                    {info.buildingName}
                  </option>
                )
              })}
            </input>
          </section>
        </div>
      </main>
    </>
  )
}

export default PunchBuilding