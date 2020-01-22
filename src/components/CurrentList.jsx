import React, { useEffect } from 'react'

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
