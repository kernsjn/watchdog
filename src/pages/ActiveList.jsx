import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Config from '../components/Config'

const ActiveList = () => {
  const [data, setData] = useState([])

  const getActiveList = async () => {
    const resp = await axios.get(`${Config.API_URL}api/punchListItem`)
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
              <th>
                <i className="fas fa-clipboard-list"></i>
              </th>
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
                <tr >
                  <td>
                    <Link to={`/item/${item.id}`}>
                      <i className="fas fa-clipboard-list fa-3x"></i>
                    </Link>
                  </td>

                  <td>
                    <p>{item.facility.facilityName}</p>
                  </td>
                  <td>
                    <p>{item.status}</p>
                  </td>
                  <td>
                    <p>{item.building.buildingName}</p>
                  </td>
                  <td>
                    <p>{item.scope.description}</p>
                  </td>
                  <td>
                    <p>{item.assignPerson.assignRole} </p>
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
