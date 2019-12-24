import React from 'react'

const Dashboard = () => {
  return (
    <>
      <section className="dropdown-section">
        <p className="labels">Facility Name</p>
        <select className="facility">
          <option value="facility-1">Facility 1</option>
          <option value="facility-2">Facility 2</option>
          <option value="facility-3">Facility 3</option>
          <option value="facility-4">Facility 4</option>
        </select>
        <p className="labels-2">Building Name</p>
        <select className="building">
          <option value="building-1">Building 1</option>
          <option value="building-2">Building 2</option>
          <option value="building-3">Building 3</option>
          <option value="building-4">Building 4</option>
        </select>
        <p className="labels-2">Scope of Work</p>
        <select className="category">
          <option value="all">All</option>
          <option value="site">Site</option>
          <option value="roof">Fixed System: Roof</option>
          <option value="interior">Fixed System: Building Interior</option>
          <option value="exterior">Fixed System: Building Exterior</option>
          <option value="hvac">Operating System: HVAC</option>
          <option value="electrical">Operating System: Electrical</option>
          <option value="plumbing">Operating System: Plumbing</option>
          <option value="fire">Operating System: Fire / Life Safety</option>
          <option value="kitchen">Operating System: Kitchen Equipment</option>
          <option value="elevator">Operating System: Vertical Transport</option>
        </select>
        <p className="labels-2">Ball-in-Court</p>
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
