import React from 'react'
import Facility from './Facility'
import Building from './Building'
import Scope from './Scope'
import Responsible from './Responsible'
import axios from 'axios'

const Dashboard = () => {
  return (
    <>
      <section>
        <div className="progressbar-container">
          <ul className="progressbar">
            <li className="active">punchlist item</li>
            <li>pending</li>
            <li>complete</li>
            <li>approved</li>
          </ul>
        </div>
      </section>
      <section className="dropdown-list">
        <ul id="dropdown-list">
          <li>
            <Facility />
          </li>
          <li>
            <Building />
          </li>
          <li>
            <Scope />
          </li>
          <li>
            <Responsible />
          </li>
        </ul>
      </section>
    </>
  )
}

export default Dashboard
