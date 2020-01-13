import React from 'react'

const Building = props => {
  return (
    <>
      <main>
        <div>
          <section className="dropdown-section">
            <p className="labels">Building Name / Number</p>
            <select className="building">
              <option value={props.buildingName}></option>
            </select>
          </section>
        </div>
      </main>
    </>
  )
}

export default Building
