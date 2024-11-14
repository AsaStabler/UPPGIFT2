import React from 'react'
import LogoTypeLight from '../assets/images/logo-light.svg'
import LogoTypeDark from '../assets/images/logo-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">

            <Link id="logo-light" className="show-light" to="/"><img src={LogoTypeLight} alt="Silicon Logotype Light" /></Link>
            <Link id="logo-dark" className="show-dark" to="/"><img src={LogoTypeDark}  alt="Silicon Logotype Dark" /></Link>

            <nav id="main-menu" className="navbar"> 
                <NavLink className="nav-link" to="/">Features</NavLink>
            </nav>

            <nav id="main-menu" className="navbar"> 
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </nav>

            <DarkModeSwitch />

            <Link id="auth-signin" to="/" className="btn-primary">
                <i className="fa-thin fa-user-large"></i>
                <span>Sign in / up</span>
            </Link>

            <button className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>

        </div>
    </header>
  )
}

export default Header