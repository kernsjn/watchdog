import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'

const ActiveList = () => {
  const [data, setData] = useState([])

  const getActiveList = async () => {
    const resp = await axios.get(`https://localhost:5001/api/PunchListItem`)
    setData(resp.data)
    console.log(data)
  }

  useEffect(() => {
    getActiveList()
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
          {data.map(item => {
            return (
              <tbody>
                <tr>
                  <td>
                    <List facilityName={item.facility.facilityName} />
                  </td>
                  <td>
                    <List status={item.status} />
                  </td>
                  <td>
                    <List buildingName={item.building.buildingName} />
                  </td>
                  <td>
                    <List description={item.scope.description} />
                  </td>
                  <td>
                    <List assignRole={item.assignPerson.assignRole} />
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </main>
    </>
  )
}

export default ActiveList
