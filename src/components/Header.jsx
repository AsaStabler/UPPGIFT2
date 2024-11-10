import React from 'react'
import LogoType from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
        <div className="container">

            <a id="logo" href="index.html"><img src={LogoType} alt="Silicon Logotype" /></a>

            <nav id="main-menu" className="navbar"> 
                <a className="nav-link" href="#">Features</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox" onChange="toggleDarkMode()" />
                    <span className="slider round"></span>
                </label>
            </div>

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