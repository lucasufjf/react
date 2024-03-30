import React from 'react';

const ReviewComponent = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.author}</h3>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
}

export default ReviewComponent;