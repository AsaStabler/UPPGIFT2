import React from 'react'

const FeatureCard = ({item}) => {
  return (
    <div className="feature-card">
        <div className="icon-container">
            <img src={item.imageUrl} alt="" />
        </div>
        <div className="space-y-1">
            <h3 className="h5">{item.title}</h3>
            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
    </div>
  )
}

export default FeatureCard