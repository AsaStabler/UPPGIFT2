import React, { useState } from 'react'
import Testimony from './Testimony'

const Testimonials = () => {

    const [testimonies, setTestimonies] = useState([
        {ratingUrl: "./testimonyimages/rating-1.svg", ratingAlt: "rating 1", reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed cupiditate? Nisi velit minima facere odio dolores odit facilis. Nulla assumenda debitis tempora animi nostrum officia quibusdam est error mollitia.", authorUrl: "./testimonyimages/author-1.svg", authorAlt: "author review 1", authorName: "Fannie Summers", authorTitle: "Designer" },
        {ratingUrl: "./testimonyimages/rating-2.svg", ratingAlt: "rating 2", reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio incidunt perspiciatis ut veniam pariatur dicta, illum ad impedit sed consequatur architecto earum! Rem, pariatur unde veniam quis facere.", authorUrl: "./testimonyimages/author-2.svg", authorAlt: "author review 2", authorName: "Albert Fiores", authorTitle: "Developer" }
    ])

  return (
    <section id="testimonials">
        <div className="container">
            <div className="headline">
                <h1>Clients are</h1>
                <h1>Loving Our App</h1>
            </div>
            {
                testimonies.map((item, index) => (<Testimony key={index} item={item} />) )
            }   
        </div>
    </section>
  )
}

export default Testimonials