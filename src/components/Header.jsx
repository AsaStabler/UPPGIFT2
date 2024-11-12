import React from 'react'
import LogoTypeLight from '../assets/images/logo-light.svg'
import LogoTypeDark from '../assets/images/logo-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <header>
        <div className="container">

            <a id="logo-light" className="show-light" href="index.html"><img src={LogoTypeLight} alt="Silicon Logotype Light" /></a>
            <a id="logo-dark" className="show-dark" href="index.html"><img src={LogoTypeDark}  alt="Silicon Logotype Dark" /></a>

            <nav id="main-menu" className="navbar"> 
                <a className="nav-link" href="#">Features</a>
            </nav>

            <DarkModeSwitch />

            <a id="auth-signin" href="#" className="btn-primary">
                <i className="fa-thin fa-user-large"></i>
                <span>Sign in / up</span>
            </a>

            <button className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>

        </div>
    </header>
  )
}

export default Header