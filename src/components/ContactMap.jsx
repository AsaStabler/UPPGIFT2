import React from 'react'
import SocialMedia from './SocialMedia'
import Map from '../assets/images/map.png'

const ContactMap = () => {
  return (
    <section id="map-cont">
        <div className="container">
            <div className="map-image">
                <img src={Map} alt="medical centers map" />
            </div>
            <div className="locations-container">
                <div className="medical-center-box">
                    <h4 className="med-title h4">Medical Center 1</h4>
                    <div className="details_medcenter">
                        <ul>
                            <li><i className="fa-regular fa-location-dot"></i>4517 Washington Ave. Manchester, Kentucky 39495</li>
                            <li><i className="fa-regular fa-phone-volume"></i>(406) 555-0120</li>
                            <li><i className="fa-regular fa-clock-five"></i><b>Mon - Fri:</b> 9:00 am - 22:00 am</li>
                            <li className="last"><i className="last-i"></i><b>Sat - Sun:</b> 9:00 am - 20:00 am</li>
                        </ul>
                    </div>

                </div>
                <div className="medical-center-box">
                    <h4 className="med-title h4">Medical Center 2</h4>
                    <div className="details_medcenter">
                        <ul>
                            <li><i className="fa-regular fa-location-dot"></i>2464 Royal Ln. Mesa,New Jersey 45463</li>
                            <li><i className="fa-regular fa-phone-volume"></i>(406) 544-0123</li>
                            <li><i className="fa-regular fa-clock-five"></i><b>Mon - Fri:</b> 9:00 am - 22:00 am</li>
                            <li className="last"><i className="last-i"></i><b>Sat - Sun:</b> 9:00 am - 20:00 am</li>
                        </ul>
                    </div>
                </div>

                <SocialMedia />

            </div>
        </div>
    </section>
  )
}

export default ContactMap