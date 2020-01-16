import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import style from './style.css'
import PunchAssigned from './PunchAssigned'
import PunchFacility from './PunchFacility'
import PunchBuilding from './PunchBuilding'
import PunchScope from './PunchScope'
import PunchRequestor from './PunchRequestor'


const Punchlist = () => {
  const [resetForm, setResetForm] = useState(false)
  const [selectedFacility, setSelectedFacility] = useState()
  const [data, setData] = useState({})

  // const getOneFacility = async () => {
  //   const resp = await axios.get(`https://localhost:5001/api/Facility`)
  //   setSelectedFacility(resp.data)
  // }

  // useEffect(() => {
  //   getOneFacility()
  // }, [])

  const submitData = e => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <>
      <main className="form-section">
        {resetForm && <Redirect to="/" />}
        <div className="title">Add a Punchlist Item</div>
        <form className="add-punchlist-item" onSubmit={submitData}>
          <div className="container">
            <div className="left-section">
              <ul className="flex-left">
                <li>
                  <label htmlFor="issue-image">Issue Image:</label>
                  <input
                    className="punch-image"
                    type="text"
                    // value={issueImage}
                    placeholder="Upload Image"
                  />
                </li>
                <li>
                  <label htmlFor="resolution-image">Resolution Image:</label>
                  <input
                    className="punch-image"
                    type="text"
                    // value={resolutionImage}
                    placeholder="Upload Image"
                  />
                </li>
              </ul>
            </div>
            <div className="right-section">
              <ul className="flex-right">
                <li>
                  <PunchFacility setSelectedFacility={setSelectedFacility} />
                </li>

                <li>
                  <PunchBuilding selectedFacility={selectedFacility} />
                </li>
                <li>
                  <PunchScope />
                </li>

                <li>
                  <PunchAssigned />
                </li>

                <li>
                  <PunchRequestor />
                </li>

                <li>
                  <label htmlFor="location-issue">Location of Issue:</label>
                  <input
                    className="input-form"
                    type="text"
                    value={data.locationIssues}
                    placeholder="What is the location of the issue"
                    // onChange={e => setData(prev => {
                    //     return {
                    //       ...prev,
                    //       locationIssues: e.target.value
                    //     }
                    // })}
                  />
                </li>

                <li>
                  <label htmlFor="issue">Description of Issue:</label>
                  <input
                    className="input-form-2"
                    type="text"
                    // value={issueDescription}
                    placeholder="Describe the issue"
                  />
                </li>
                <li className="button">
                  <button className="submit-issue" type="submit">
                    Submit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default Punchlist
