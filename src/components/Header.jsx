import React, { useState } from 'react'
import LogoTypeLight from '../assets/images/logo-light.svg'
import LogoTypeDark from '../assets/images/logo-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { Link, NavLink } from 'react-router-dom'
//import MobileMenu from './MobileMenu'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
        <div className="container">

            <Link id="logo-light" className="show-light" to="/"><img src={LogoTypeLight} alt="Silicon Logotype Light" /></Link>
            <Link id="logo-dark" className="show-dark" to="/"><img src={LogoTypeDark}  alt="Silicon Logotype Dark" /></Link>

            <nav className="navbar"> 
                <NavLink className="nav-link" to="/">Features</NavLink>
            </nav>

            <nav className="navbar"> 
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </nav>

            <DarkModeSwitch />

            <Link id="auth-signin" to="/" className="btn-primary">
                <i className="fa-thin fa-user-large"></i>
                <span>Sign in / up</span>
            </Link>

            <button className="btn-mobile" onClick={toggleMenu}>
                <i className="fa-regular fa-bars"></i>
            </button>

        </div>

        <div className={`container ${showMenu ? 'show': ''}`}>
            <div className="mobile-menu">
                <Link to="/" className="btn-primary">
                    <i className="fa-thin fa-user-large"></i>
                    <span>Sign in / up</span>
                </Link>
                <nav> 
                    <NavLink className="nav-link" to="/">Features</NavLink>
                </nav>
                <nav> 
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </nav>
            </div>
        </div>

    </header>
  )
}

export default Header