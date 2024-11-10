import React, { useState } from 'react'
import BrandBox from './BrandBox'

const Brands = () => {

    const [brandBoxes, setBrandBoxes] = useState([
        {brandId: "brand-1", imageUrl: "./brandimages/brand-1.svg"},
        {brandId: "brand-2", imageUrl: "./brandimages/brand-2.svg"},
        {brandId: "brand-3", imageUrl: "./brandimages/brand-3.svg"},
        {brandId: "brand-4", imageUrl: "./brandimages/brand-4.svg"},
        {brandId: "brand-5", imageUrl: "./brandimages/brand-5.svg"},
        {brandId: "brand-6", imageUrl: "./brandimages/brand-6.svg"}
    ])

  return (
    <section id="brands">
        <div className="container">
        {
            brandBoxes.map((item, index) => (<BrandBox key={index} item={item} />) )
        }   
        </div>
    </section>
  )
}

export default Brands