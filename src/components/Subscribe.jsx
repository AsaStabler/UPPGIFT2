import React from 'react'
import SubscribeForm from './SubscribeForm'
import Notification from '../assets/images/notification.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="container">
            <div className="notification-group">
                <div>
                    <img src={Notification} alt="notification icon" />
                </div>

                <div className="heading-subscribe">
                    <h3 className="h4 line-1-mobtablet">Subscribe to our newsletter</h3>
                    <h3 className="h4 line-1-desktop">Subscribe to our newsletter to stay</h3>
                    <h3 className="h4 line-2">informed about latest updates</h3>
                </div>

            </div>
            <SubscribeForm />
        </div>
    </section>
  )
}

export default Subscribe