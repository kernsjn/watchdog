import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActiveList from '../pages/ActiveList'

const CurrentList = props => {
  // const [activeList, setActiveList] = useState([])
  // const [searchTerm, setSearchTerm] = useState()

  // const getActiveList = async () => {
  //   const resp = await axios.get(
  //     'https://localhost:5001/api/PunchListItem/list'
  //   )
  //   setActiveList(resp.activeList)
  //   console.log(activeList)
  // }

  useEffect(() => {
    console.log(props.punchlistItems)
  }, [])

  return (
    <>
      <main>
        <table id="active-list">
          <caption>Active Punchlist</caption>

          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Status</th>
              <th>Building Name</th>
              <th>Scope</th>
              <th>Ball-in-Court</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td
                type="text"
                placeholder="Facility"
                value={activeList}
                name="facilityId"
                onChange={e => props.setActiveList(e.target.value)}
              >
                Facility Name
              </td>
              <td>
                <select
                  type="text"
                  placeholder="Status"
                  value="status"
                  onChange={e => props.setActiveList(e.target.value)}
                >
                  <option>Pending</option>
                  <option>Open</option>
                  <option>In Review</option>
                  <option>Closed</option>
                </select>
              </td>
              <td
                type="text"
                placeholder="Building Name"
                value={activeList}
                name="buildingId"
                onChange={e => props.setActiveList(e.target.value)}
              >
                Building Name
              </td>
              <td
                type="text"
                placeholder="Scope"
                value={activeList}
                name="scopeId"
                onChange={e => props.setActiveList(e.target.value)}
              >
                Scope{' '}
              </td>
              <td
                type="text"
                placeholder="Ball-in-Court"
                value={activeList}
                name="assignId"
                onChange={e => props.setActiveList(e.target.value)}
              >
                Ball-in-Court
              </td>
            </tr> */}
          </tbody>
        </table>
        {/* <button onClick={getActiveList}>Search</button> */}
      </main>
    </>
  )
}

export default CurrentList
