import React from 'react'
import ContactForm from './ContactForm'
import Email from '../assets/images/email.svg'
import Careers from '../assets/images/careers.svg'


const ContactUs = () => {
  return (
    <section id="contact-us">
        <div className="container">

            <div className="heading-contact">
                <div>
                    <h1 className="h1">Contact Us</h1>
                </div>
            </div>
            
            <ContactForm />
            
            <div className="contact-us-container">
                <div id="contact-1" className="contact-box">
                    <div>
                        <img src={Email} alt="email icon" />
                    </div>

                    <div>
                        <h4 className="h4">Email us</h4>
                    </div>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                    <div>
                        <a id="btn-contact-1" className="btn-contact text-nav">
                            <span>Leave a message</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>                       
                <div id="contact-2" className="contact-box">
                    <div>
                        <img src={Careers} alt="careers icon" />
                    </div>

                    <div>
                        <h4 className="h4">Careers</h4>
                    </div>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <div>
                        <a id="btn-contact-2" className="btn-contact text-nav">
                            <span>Send an application</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ContactUs
