import React, { useState, useEffect } from 'react'

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
      const newMode = !isDarkMode
      setIsDarkMode(newMode)

      if (newMode) {
          document.documentElement.setAttribute('data-theme', 'dark')
          localStorage.setItem('theme', 'dark')
      } else {
          document.documentElement.setAttribute('data-theme', 'light')
          localStorage.setItem('theme', 'light')
      }
    };

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme')

      if (savedTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark')
          setIsDarkMode(true)
      } else {
          document.documentElement.setAttribute('data-theme', 'light')
          setIsDarkMode(false)
      }
    }, [])  

    return (
      <div className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label className="toggle-switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
              <span className="slider round"></span>
          </label>
      </div>
    )
}

export default DarkModeSwitch