import React, { useState } from 'react'
import FeatureCard from './FeatureCard'
import IphoneFeatures from '../assets/images/iphone-app-features.svg'

const Features = () => {

    const [featureCards, setFeatureCards] = useState([
        {imageUrl: "./featureimages/credit-card.svg", title: "Easy Payments"},
        {imageUrl: "./featureimages/shield.svg", title: "Data Security"},
        {imageUrl: "./featureimages/bars-graphic.svg", title: "Cost Statistics"},
        {imageUrl: "./featureimages/communication.svg", title: "Support 24/7"},
        {imageUrl: "./featureimages/wallet.svg", title: "Regular Cashback"},
        {imageUrl: "./featureimages/happy.svg", title: "Top Standards"}
    ])

  return (
    <section className="features">
    <div className="container">
        <div className="iphone">
            <img className="iphone-img" src={IphoneFeatures} alt="iphone with credit card" />
        </div>
        <div className="text space-y-1">
            <h2 className="h1">App Features</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facere possimus assumenda voluptas, quod beatae, sit mollitia exercitationem fugit vitae molestias unde aliquam placeat soluta.</p>

            <div className="features-grid">
            {
                featureCards.map((item, index) => (<FeatureCard key={index} item={item} />) )
            }   
            </div> 
        </div>
    </div>
</section>
  )
}

export default Features