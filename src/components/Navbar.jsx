import React from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const toggleIcon = () => setClicked(!clicked)
  return (
    <nav className='navbarItems'>
        <h1 className='navbar-logo'>
            Trippy
        </h1>
        <div className='menu-icons' onClick={toggleIcon}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
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