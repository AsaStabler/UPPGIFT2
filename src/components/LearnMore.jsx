import React from 'react'
import { Link } from 'react-router-dom'

const LearnMore = () => {
  return (
    <div>
        <Link to="/" className="btn-learn-more">
            <span>Learn more</span>
            <i className="fa-regular fa-arrow-right"></i>
        </Link>
    </div>
  )
}

export default LearnMore