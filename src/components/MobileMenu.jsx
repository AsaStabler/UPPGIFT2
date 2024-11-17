//import React, { useState } from 'react'
import React from 'react'

//const [showMenu, setShowMenu] = useState(false)

//  const toggleMenu = () => {
//    setShowMenu(!showMenu)
//  }

const MobileMenu = () => {
  return (
    <div className={`container ${showMenu ? 'show': ''}`}>
        <div className="mobile-menu">
            <a href="" className="btn-primary">
                <i className="fa-thin fa-user-large"></i>
                <span>Sign in / up</span>
            </a>
            <nav> 
                <a className="nav-link" href="index.html">Features</a>
            </nav>
            <nav> 
                <a className="nav-link" href="contact.html">Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default MobileMenu