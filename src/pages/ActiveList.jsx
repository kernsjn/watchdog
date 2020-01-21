import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'
import { Link } from 'react-router-dom'

const ActiveList = () => {
  const [data, setData] = useState([])

  const getActiveList = async () => {
    const resp = await axios.get(`https://localhost:5001/api/PunchListItem`)
    setData(resp.data)
    console.log(data)
  }

  useEffect(() => {
    getActiveList()
  }, [])

  return (
    <div>
      {data.map(item => {
        return (
          <div>
            <div>
              <Link to={`/active/${item}`}>
                <List
                  facilityId={item.facilityId}
                  buildingId={item.buildingId}
                  scopeId={item.scopeId}
                  assignId={item.assignId}
                  facilityName={item.facility.facilityName}
                  buildingName={item.buildingName}
                  description={item.description}
                  assignRole={item.assignRole}
                  issueLocation={item.issueLocation}
                  issue={item.issue}
                  status={item.status}
                />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
{
  /*      
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
            <tr>
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
            </tr>
          </tbody>
        </table>
        <br></br>
        test
        <list
          facilityId={activeList.facilityId}
          buildingId={activeList.buildingId}
          scopeId={activeList.scopeId}
          assignId={activeList.assignId}
        /> */
}

export default ActiveList
