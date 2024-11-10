import React from 'react'

const Testimony = ({item}) => {
  return (
    <div className="testimony">
        <button className="btn-quote">
            <img src="./testimonyimages/quote-icon.svg" alt="quote icon" />
        </button>
        <div>
            <img src={item.ratingUrl} alt={item.ratingAlt} />
        </div>
        <p className="review">{item.reviewText}</p>
        <div className="author">
            <img src={item.authorUrl} alt={item.authorAlt} />
            <div>
                <p className="author-name">{item.authorName}</p>
                <p className="author-title">{item.authorTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Testimony