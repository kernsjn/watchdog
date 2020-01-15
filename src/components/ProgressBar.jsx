import React from 'react'

const ProgressBar = () => {
  return (
    <>
      <div>
        <section>
          <div className="progressbar-container">
            <ul className="progressbar">
              <li className="active">pending</li>
              <li>open</li>
              <li>in review</li>
              <li>closed</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProgressBar
