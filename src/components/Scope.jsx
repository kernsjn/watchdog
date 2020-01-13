import React from 'react'

const Scope = () => {
  return (
    <>
      <div>
        <section className="dropdown-section">
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
            <option value="elevator">
              Operating System: Vertical Transport
            </option>
          </select>
        </section>
      </div>
    </>
  )
}

export default Scope
