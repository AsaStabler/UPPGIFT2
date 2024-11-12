import React from 'react'
import AppStoreLight from '../assets/images/appstore-light.svg'
import AppStoreDark from '../assets/images/appstore-dark.svg'
import GooglePlayLight from '../assets/images/googleplay-light.svg'
import GooglePlayDark from '../assets/images/googleplay-dark-mobile.svg'
import IphoneBudget from '../assets/images/iphone-mybudget_desktop.svg'
import IphoneCards from '../assets/images/iphone-yourcards_desktop.svg'


const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>
            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-download-app show-light" href="#"><img src={AppStoreLight} alt="appstore light" /></a>
                    <a className="btn-download-app show-dark" href="#"><img src={AppStoreDark} alt="appstore dark" /></a>
                    <a className="btn-download-app show-light" href="#"><img src={GooglePlayLight} alt="googleplay light" /></a>
                    <a className="btn-download-app show-dark" href="#"><img src={GooglePlayDark} alt="googleplay dark" /></a>
                </div>
                <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>
            <div className="images">
                <img className="img-back" src={IphoneBudget} alt="iphone my budget" />
                <img className="img-front" src={IphoneCards} alt="iphone your cards" />
            </div>
        </div>
    </section>
  )
}

export default Hero