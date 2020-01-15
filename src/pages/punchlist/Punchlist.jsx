import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import style from './style.css'

const Punchlist = () => {
  const [resetForm, setResetForm] = useState(false)
  return (
    <>
      <main className="form-section">
        {resetForm && <Redirect to="/" />}
        <div className="title">Add a Punchlist Item</div>
        <form
          className="add-punchlist-item"
          // onSubmit={submitData}
        >
          
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
                  <label htmlFor="facility">Campus / Facility:</label>
                  <select
                    className="input-form"
                    type="text"
                    // value={facility}
                    placeholder="Choose for Campus / Facility"
                  >
                    <option value="facilityName">Facility Location</option>
                  </select>
                </li>

                <li>
                  <label htmlFor="building">Building:</label>
                  <select
                    className="input-form"
                    type="text"
                    // value={building}
                    placeholder="Choose for Building"
                  >
                    <option value="buildingName">Building</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="scope">Scope</label>
                  <select
                    className="input-form"
                    type="text"
                    // value={scope}
                    placeholder="Choose the Scope"
                  >
                    <option value="site">Site</option>
                    <option value="roof">Fixed System: Roof</option>
                    <option value="interior">
                      Fixed System: Building Interior
                    </option>
                    <option value="exterior">
                      Fixed System: Building Exterior
                    </option>
                    <option value="hvac">Operating System: HVAC</option>
                    <option value="electrical">
                      Operating System: Electrical
                    </option>
                    <option value="plumbing">Operating System: Plumbing</option>
                    <option value="fire">
                      Operating System: Fire / Life Safety
                    </option>
                    <option value="kitchen">
                      Operating System: Kitchen Equipment
                    </option>
                    <option value="elevator">
                      Operating System: Vertical Transport
                    </option>
                    <option value="other">Other</option>
                  </select>
                </li>

                <li>
                  <label htmlFor="assignee">Ball-in-Court:</label>
                  <select
                    className="input-form"
                    type="text"
                    // value={assignee}
                    placeholder="Choose your Assignment"
                  >
                    <option value="owner">Owner</option>
                    <option value="architect">Architect</option>
                    <option value="contractor">Contractor</option>
                    <option value="subcontractor">Subcontractor</option>
                  </select>
                </li>

                <li>
                  <label htmlFor="requestor">Requestor:</label>
                  <select
                    className="input-form"
                    type="text"
                    // value={requestor}
                    placeholder="Your Role"
                  >
                    <option value="owner">Owner</option>
                    <option value="architect">Architect</option>
                    <option value="contractor">Contractor</option>
                    <option value="subcontractor">Subcontractor</option>
                  </select>
                </li>

                <li>
                  <label htmlFor="location-issue">Location of Issue:</label>
                  <input
                    className="input-form-2"
                    type="text"
                    // value={issueLocation}
                    placeholder="What is the location of the issue"
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
