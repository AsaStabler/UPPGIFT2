import React from 'react'

const BrandBox = ({item}) => {
  return (
    <div id={item.brandId} className="brand-box">
        <img src={item.imageUrl} alt="" />
    </div>
  )
}

export default BrandBox