import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../components/Config'

const UpdateItem = props => {
  const [itemData, setItemData] = useState({
    facility: {},
    building: {},
    scope: {},
    requestor: {}
  })
  const [status, setStatus] = useState()
  const [assignRole, setAssignRole] = useState()
  const [resolution, setResolution] = useState()

  const fetchItem = async () => {
    const resp = await axios.get(
      `${Config.API_URL}api/PunchListItem/${props.match.params.id}`
    )

    console.log(resp.data)
    setItemData(resp.data)
  }

  useEffect(() => {
    fetchItem()
  }, [])

  const submitItem = async event => {
    event.preventDefault()
    const resp = await axios.put(
      `${Config.API_URL}api/punchListItem/`,

      {
        resolution: resolution,
        status: status,
        assignRole: assignRole,
      }
    )
    console.log(resp.data)
  }

  return (
    <>
      <main className="update-form-section">
        <div className="update-title">Update Punchlist Item</div>
        <form className="update-punchlist-item" onSubmit={submitItem}>
          <div className="update-container">
            <div className="update-lt-section">
              <ul className="update-flex-lt">
                <li>
                  <label>Facility Name:</label>
                  <input
                    className="disabled-input-form"
                    type="text"
                    name="facilityName"
                    value={itemData.facility.facilityName}
                    disabled
                  />
                </li>
                <li>
                  <label>Building Name:</label>
                  <input
                    className="disabled-input-form"
                    type="text"
                    name="buildingName"
                    value={itemData.building.buildingName}
                    disabled
                  />
                </li>
                <li>
                  <label>Scope:</label>
                  <input
                    className="disabled-input-form"
                    type="text"
                    name="description"
                    value={itemData.scope.description}
                    disabled
                  />
                </li>
                <li>
                  <label>Location of Issue:</label>
                  <input
                    className="disabled-input-form"
                    type="text"
                    name="issueLocation"
                    value={itemData.issueLocation}
                    disabled
                  />
                </li>
                <li>
                  <label>Issue:</label>
                  <input
                    className="disabled-input-form"
                    type="textarea"
                    name="issueLocation"
                    value={itemData.issue}
                    disabled
                  />
                </li>

                <li>
                  <label>Assigned To:</label>
                  <select
                    className="update-input-form"
                    type="text"
                    value={assignRole}
                    placeholder="Reassign Punchlist Item"
                    name="assignRole"
                    onChange={e => {
                      setAssignRole(e.target.value)
                    }}
                  />
                </li>
              </ul>
            </div>

            <div className="update-rt-section">
              <ul className="update-flex-rt">
                <li>
                  <label>Requested:</label>
                  <input
                    className="disabled-input-form"
                    type="text"
                    value={itemData.requestor.requestRole}
                    name="requestRole"
                    disabled
                  />
                </li>
                <li className="update-image-list">
                  <label className="image-label" htmlFor="issue-image">
                    Issue Image:
                  </label>
                  <br />
                  <input
                    className="update-punch-image"
                    type="text"
                    placeholder="Upload Image"
                  />
                </li>

                <li className="update-image-list">
                  <label className="image-label" htmlFor="issue-image">
                    Resolution Image:
                  </label>
                  <br />
                  <input
                    className="update-punch-image"
                    type="text"
                    placeholder="Upload Image"
                  />
                </li>

                <li>
                  <label>Resolution Notes:</label>
                  <input
                    className="update-input-form-2"
                    type="text"
                    value={resolution}
                    placeholder="Describe Resolution"
                    name="issue"
                    onChange={e => {
                      setResolution(e.target.value)
                    }}
                  />
                </li>
                <li>
                  <label>Status:</label>
                  <select
                    className="update-input-form"
                    type="text"
                    value={status.s}
                    placeholder="Current Status"
                    name="status"
                    onChange={e => {
                      setStatus(e.target.value)
                    }}
                  />
                </li>

                <li className="update-button">
                  <button className="submit-issue" type="submit">
                    Update
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

export default UpdateItem
