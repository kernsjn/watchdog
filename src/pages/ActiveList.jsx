import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'
import { Link } from 'react-router-dom'
import Config from '../components/Config'
import UpdateItem from './UpdateItem'
// import clip from '../assets/clip.png'

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
        {/* <img id="clip" alt="board" src={clip} />{' '} */}
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
          {data.map(item => {
            return (
              <tbody>
                <tr>
                  <td>
                    <Link to={`/item/${item.id}`}>
                      <i class="fas fa-clipboard-list fa-3x"></i>
                    </Link>
                  </td>

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
