import React from 'react'
import Accordion from './Accordion'
import ThinkingBubble from '../assets/images/thinking-bubble-icon.svg'
import RingingPhone from '../assets/images/ringing-phone-icon.svg'

const FAQ = () => {
  return (
    <section id="faq">
        <div className="container">
            <div className="heading-faq">
                <div>
                    <h2 className="h2">Any questions?</h2>
                    <h2 className="h2">Check out the FAQs</h2>
                </div>
                <div>
                    <p className="text-lg">Still have unanswered questions and need to get in touch?</p>
                </div>
            </div>

            <Accordion />

            <div className="contact-container">
                <div id="contact-1" className="contact-box">
                    <div>
                        <img src={RingingPhone} alt="ringing phone icon" />
                    </div>
                    <p>Still have questions?</p>
                    <div>
                        <a id="btn-contact-1" className="btn-contact">
                            <span>Contact us</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>                       
                <div id="contact-2" className="contact-box">
                    <div>
                        <img src={ThinkingBubble} alt="thinking bubble icon" />
                    </div>
                    <p>Don't like phone calls?</p>
                    <div>
                        <a id="btn-contact-2" className="btn-contact">
                            <span>Contact us</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="button-group">
                <a className="btn-contact-us">Contact us now</a>
            </div>
        </div>
    </section>
  )
}

export default FAQ