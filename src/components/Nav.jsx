import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import watchdog from '../assets/watchdog.png'

const Nav = () => {
  return (
    <Router>
      <header className="navigation-bar">
        {/* <nav> */}
        <ul>
          <li>
            <Link to="/">
              <img id="logo" src={watchdog} />{' '}
            </Link>
          </li>
          <li>
            <Link to="/1">Login</Link>
          </li>
        </ul>
        {/* </nav> */}
      </header>
    </Router>
  )
}

export default Nav
