import React from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbarItems'>
        <h1 className='navbar-logo'>
            Trippy
        </h1>
        <ul className='nav-menu'>
            <li>
                <Link>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar