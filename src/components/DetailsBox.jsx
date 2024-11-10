import React from 'react'

const DetailsBox = ({item}) => {
  return (
    <div className="info-box">
        <button className="btn-icon">
            <img src={item.imageUrl} alt={item.imageAlt} />
        </button>
        <p>Manage your payments online. Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default DetailsBox