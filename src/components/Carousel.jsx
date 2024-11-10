import React from 'react'
import IphoneLeftTablet from '../assets/images/iPhone-left_tablet.png'
import IphoneLeftDesktop from '../assets/images/iPhone-left_desktop.png'
import IphoneShellMobile from '../assets/images/iphone-shell_mobile.svg'
import IphoneShellTablet from '../assets/images/iphone-shell_tablet.svg'
import IphoneMiddleDesktop from '../assets/images/iPhone-middle_desktop.png'
import IphoneRightTablet from '../assets/images/iPhone-right_tablet.png'
import IphoneRightDesktop from '../assets/images/iPhone-right_desktop.png'


const Carousel = () => {
  return (
    <section id="carousel">
        <div className="container">
            <div className="heading">
                <h1>How does it work?</h1>
            </div>
            <div className="images">
                <img className="left-img-tablet" src={IphoneLeftTablet} alt="iPhone left tablet" />
                <img className="left-img-desktop" src={IphoneLeftDesktop} alt="iPhone left desktop" />
                <img className="middle-img-mobile" src={IphoneShellMobile} alt="iphone shell middle mobile" />
                <img className="middle-img-tablet" src={IphoneShellTablet} alt="iphone shell middle tablet" />
                <img className="middle-img-desktop" src={IphoneMiddleDesktop} alt="iPhone middle desktop" /> 
                <img className="right-img-tablet" src={IphoneRightTablet} alt="iPhone right tablet" />
                <img className="right-img-desktop" src={IphoneRightDesktop} alt="iPhone right desktop" />
            </div>
            <div className="text-box">
                <div className="heading2">
                    <h2 className="h2-mobile">Transfers to people from your contact list</h2>
                    <h2 className="h2-tablet">Step3. Transfers to people from your contact list</h2>
                    <h2 className="h2-desktop">Latest transaction history</h2>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas molestiae nam provident, laboriosam aperiam dolorum porro ab laudantium!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel