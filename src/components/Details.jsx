import React, { useState } from 'react'
import AppMoneyTransfer from '../assets/images/app-moneytransfer_desktop.svg'
import AppReceiveMoney from '../assets/images/app-receivemoney_desktop.svg'
import LearnMore from './LearnMore'
import DetailsBox from './DetailsBox'



const Details = () => {

    const [detailsBoxes, setdetailsBoxes] = useState([
        {imageUrl: "./detailsimages/credit-card-icon.svg", imageAlt: "credit card"},
        {imageUrl: "./detailsimages/wallet-icon.svg", imageAlt: "wallet"}
    ])

  return (
    <section id="details">
        <div className="container">
            <div className="topdetails">
                <div className="money-transfer">
                    <div className="heading-dts">
                        <h2>Make your money</h2>
                        <h2>transfer simple and clear</h2>
                    </div>
                    <div className="details-text">
                        <ul>
                            <li>Banking transactions are free for you</li>
                            <li>No monthly cash commission</li>
                            <li>Manage payments and transactions online</li>
                        </ul>
                    </div>
                    <LearnMore />
                </div>
                <div className="money-transfer-img">
                    <img src={AppMoneyTransfer} alt="app money transfer" />
                </div>
            </div>
            <div className="bottomdetails">
                <div className="receive-money-img">
                    <img src={AppReceiveMoney} alt="app receive money" />
                </div>
                <div className="receive-money">
                    <div className="heading-dts">
                        <h2>Receive payment from</h2>
                        <h2>international bank details</h2>
                    </div>
                    
                    <div className="info-container">
                        {
                            detailsBoxes.map((item, index) => (<DetailsBox key={index} item={item} />) )
                        }   
                    </div>                    
                    <LearnMore />                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details