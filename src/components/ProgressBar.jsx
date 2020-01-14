import React from 'react'

const ProgressBar = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default ProgressBar
