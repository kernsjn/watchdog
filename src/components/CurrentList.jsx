import React from 'react'

const CurrentList = () => {
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
            <tr>
              <td>Facility Name</td>
              <td>
                <select>
                  <option>Pending</option>
                  <option>Open</option>
                  <option>In Review</option>
                  <option>Closed</option>
                </select>
              </td>
              <td>Building Name</td>
              <td>Scope</td>
              <td>Ball-in-Court</td>
            </tr>
            <tr>
              <td>Facility Name</td>
              <td>
                <select>
                  <option>Pending</option>
                  <option>Open</option>
                  <option>In Review</option>
                  <option>Closed</option>
                </select>
              </td>
              <td>Building Name</td>
              <td>Scope</td>
              <td>Ball-in-Court</td>
            </tr>
            <tr>
              <td>Facility Name</td>
              <td>
                <select>
                  <option>Pending</option>
                  <option>Open</option>
                  <option>In Review</option>
                  <option>Closed</option>
                </select>
              </td>
              <td>Building Name</td>
              <td>Scope</td>
              <td>Ball-in-Court</td>
            </tr>
            <tr>
              <td>Facility Name</td>
              <td>
                <select>
                  <option>Pending</option>
                  <option>Open</option>
                  <option>In Review</option>
                  <option>Closed</option>
                </select>
              </td>
              <td>Building Name</td>
              <td>Scope</td>
              <td>Ball-in-Court</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default CurrentList
