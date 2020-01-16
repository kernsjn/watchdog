import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Style from './style.css'
import PunchAssigned from './PunchAssigned'
import PunchFacility from './PunchFacility'
import PunchBuilding from './PunchBuilding'
import PunchScope from './PunchScope'
import PunchRequestor from './PunchRequestor'

const Punchlist = () => {
  const [resetForm, setResetForm] = useState(false)
  const [selectedFacility, setSelectedFacility] = useState()
  const [data, setData] = useState({})
  const [punchId, setPunchId] = useState()
  const [
    wasPunchlistCreatedSuccessfully,
    setWasPunchlistCreatedSuccessfully,
  ] = useState(false)

  const updatePunchlist = e => {
    e.persist()
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitPunchlist = async e => {
    e.preventDefault()
    const isValid = Object.keys(data).reduce((acc, key) => {
      return acc && data[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post(
        'https://localhost:5001/api/PunchListItem',
        {
          ...data,
        }
      )
      if (resp.status == 201) {
        setPunchId(resp.data.id)
      }
    }
  }

  useEffect(() => {
    if (punchId) {
      setWasPunchlistCreatedSuccessfully(true)
    }
  }, [punchId])

  return wasPunchlistCreatedSuccessfully ? (
    <Redirect to={'/'} />
  ) : (
    // <Redirect to={'./activelist/${punchId}'} />
    <>
      <main className="form-section">
        <div className="title">Add a Punchlist Item</div>
        <form className="add-punchlist-item" onSubmit={submitPunchlist}>
          <div className="container">
            <div className="lt-section">
              <ul className="flex-lt">
                <li>
                  <PunchFacility
                    setSelectedFacility={selectFacility => {
                      setSelectedFacility(selectFacility)
                      setData(prev => {
                        return {
                          ...prev,
                          facilityId: parseInt(selectFacility),
                        }
                      })
                    }}
                  />
                </li>

                <li>
                  <PunchBuilding
                    selectedFacility={selectedFacility}
                    updateBuildingId={buildingId => {
                      setData(prev => {
                        return {
                          ...prev,
                          buildingId: parseInt(buildingId),
                        }
                      })
                    }}
                  />
                </li>
                <li>
                  <PunchScope
                    prepPunchScope={scopeId => {
                      setData(prev => {
                        return {
                          ...prev,
                          scopeId: parseInt(scopeId),
                        }
                      })
                    }}
                  />
                </li>

                <li>
                  <PunchAssigned
                    prepPunchAssigned={assignId => {
                      setData(prev => {
                        return {
                          ...prev,
                          assignId: parseInt(assignId),
                        }
                      })
                    }}
                  />
                </li>

                <li>
                  <PunchRequestor
                    prepPunchRequestor={requestId => {
                      setData(prev => {
                        return {
                          ...prev,
                          requestId: parseInt(requestId),
                        }
                      })
                    }}
                  />
                </li>
              </ul>
            </div>

            <div className="rt-section">
              <ul className="flex-rt">
                <li className="punch-image-list">
                  <label className="image-label" htmlFor="issue-image">
                    Issue Image:
                  </label>
                  <br />
                  <input
                    className="punch-image"
                    type="text"
                    placeholder="Upload Image"
                  />
                </li>
                <li>
                  <label htmlFor="location-issue">Location of Issue:</label>
                  <input
                    className="input-form"
                    type="text"
                    value={data.issueLocation}
                    placeholder="What is the location of the issue"
                    name="issueLocation"
                    onChange={updatePunchlist}
                  />
                </li>
                <li>
                  <label htmlFor="issue">Description of Issue:</label>
                  <input
                    className="input-form-2"
                    type="text"
                    value={data.issue}
                    placeholder="Describe the issue"
                    name="issue"
                    onChange={updatePunchlist}
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
