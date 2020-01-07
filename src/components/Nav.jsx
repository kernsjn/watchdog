import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import watchdog from '../assets/watchdog.png'

const Nav = () => {


  return (
    <Router>
      <nav>
        <header className="navigation-bar">
          {' '}
          <Link to="/">
            <img id="logo" src={watchdog} />{' '}
          </Link>
        </header>
        <ul>
          <li className="nav">
            <Link to="/punchlist">Punchlist</Link>
          </li>
          <li className="nav">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Nav
