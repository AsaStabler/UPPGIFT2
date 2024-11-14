import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
      <section className="breadcrumb-box">
        <div className="container">
            <ul className="breadcrumb text-brcr">
              <li><i className="fa-regular fa-house first"></i><Link className="text-brcr" to="/">Homepage</Link></li>
              { 
                pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`

                    return (
                        <li key={to}><i className="fa-regular fa-chevrons-right others"></i>
                            { index === pathnames.lenght -1 
                                ? (<span>{value.replace(/-/g, ' ')}</span>)
                                : ( <Link to={to}>{value.replace(/-/g, ' ')}</Link> )}
                        </li>    
                    )
                })
              }
            </ul>
        </div>
      </section>
    )
}

export default Breadcrumb