import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import watchdog from '../assets/watchdog.png'

const Nav = () => {
  return (
    <>
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
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-line"></div>
    </>
  )
}

export default Nav
