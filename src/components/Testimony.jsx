import React from 'react'
//import { Link } from 'react-router-dom'

const Testimony = ({item}) => {
  return (
    //<Link to={`/services/${item.id}`}>
        <div className="testimony">
            <button className="btn-quote">
                <img src="./testimonyimages/quote-icon.svg" alt="quote icon" />
            </button>
            <div>
                <img src={`./testimonyimages/starRating-${item.starRating}.svg`} alt={`starRating ${item.starRating}`} />
            </div>
            <p className="review">{item.comment}</p>
            <div className="author">
                <img src={item.avatarUrl} alt={`${item.author} avatar`} />
                <div>
                    <p className="author-name">{item.author}</p>
                    <p className="author-title">{item.jobRole}</p>
                </div>
            </div>
        </div>
    //</Link>
  )
}

export default Testimony