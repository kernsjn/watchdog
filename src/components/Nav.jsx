import React from 'react'
import { Link } from 'react-router-dom'
import watchdog from '../assets/watchdog.png'

const Nav = () => {
  return (
    <>
      <nav>
        <header className="navigation-bar">
          {' '}
          <Link to="/">
            <img id="logo" alt="watchdog" src={watchdog} />{' '}
          </Link>
        </header>
        <ul>
          <li className="nav">
            <Link to="/active">Active List</Link>
          </li>
          <li className="nav">
            <Link to="/punchlist">Add Item</Link>
          </li>
          <li className="nav">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-line"></div>
    </>
  )
}

export default Nav
