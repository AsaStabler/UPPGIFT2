import React from 'react'

const SubscribeForm = () => {
  return (
    <div className="subscribe-group">
        <i className="fa-regular fa-envelope icon"></i>
        <input className="form-input-email email" type="email" placeholder="Your Email" />
        <button className="btn-subscribe">Subscribe</button>
    </div>
  )
}

export default SubscribeForm