import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CurrentList = props => {
  useEffect(() => {
    console.log(props.punchItems)
    console.log(props.punchAssignedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main>
        <table id="active-list">
          <caption>Active Punchlist Items</caption>

          <thead>
            <tr>
              <th>
                <i class="fas fa-clipboard-list"></i>
              </th>
              <th>Facility Name</th>
              <th>Status</th>
              <th>Building Name</th>
              <th>Scope</th>
              <th>Ball-in-Court</th>
            </tr>
          </thead>
          {props.punchItems.map(item => {
            return (
              <tbody>
                <tr>
                  <td>
                    <Link to={`/item/${item.id}`}>
                      <i class="fas fa-clipboard-list fa-3x"></i>
                    </Link>
                  </td>
                  <td>{item.facility.facilityName}</td>
                  <td>{item.status} </td>
                  <td>{item.building.buildingName} </td>
                  <td>{item.scope.description} </td>
                  <td>{item.assignPerson.assignRole} </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </main>
    </>
  )
}

export default CurrentList
