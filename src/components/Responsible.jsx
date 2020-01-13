import React from 'react'

const Responsible = () => {
  return (
    <>
      <div>
        <section className="dropdown-section">
          <p className="labels-2">Ball-in-Court</p>
          <select className="ball-in-court">
            <option value="owner">Owner</option>
            <option value="architect">Architect</option>
            <option value="contractor">Contractor</option>
            <option value="subcontractor">Subcontractor</option>
          </select>
        </section>
      </div>
    </>
  )
}

export default Responsible
