import React from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './ManuItems'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbarItems'>
        <h1 className='navbar-logo'>
            Trippy
        </h1>
        <ul className='nav-menu'>
            {MenuItems.map((item, index) => (
                <li key={index}>
                    <a href={item.url} className={item.cName}>
                        <i className={item.icon}></i>
                        {item.title}
                    </a>
                </li>
            ))}
            <button className='sign-up-button'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar