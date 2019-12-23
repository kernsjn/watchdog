import React from 'react'

const Dashboard = () => {
  return (
    <>
      <section className="dropdown-section">
        <select className="facility">
          <option value="facility-1">Facility 1</option>
          <option value="facility-2">Facility 2</option>
          <option value="facility-3">Facility 3</option>
          <option value="facility-4">Facility 4</option>
        </select>

        <select className="building">
          <option value="building-1">Building 1</option>
          <option value="building-2">Building 2</option>
          <option value="building-3">Building 3</option>
          <option value="building-4">Building 4</option>
        </select>

        <select className="category">
          <option value="all">All</option>
          <option value="site">Site</option>
          <option value="fixed">Fixed Systems</option>
          <select className="fixed-category">
            <option value="roof">Roof</option>
            <option value="interior">Building Interior</option>
            <option value="exterior">Building Exterior</option>
          </select>
          <option value="contractor">Contractor</option>
          <option value="subcontractor">Subcontractor</option>
        </select>

        <select className="ball-in-court">
          <option value="owner">Owner</option>
          <option value="architect">Architect</option>
          <option value="contractor">Contractor</option>
          <option value="subcontractor">Subcontractor</option>
        </select>
      </section>
    </>
  )
}

export default Dashboard
