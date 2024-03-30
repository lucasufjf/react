import React from 'react';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';
import TableComponent from './TableComponent';
import ButtonComponent from './ButtonComponent';
import ReviewComponent from './ReviewComponent';
import './App.css';

const AppComponent = () => {
  const tableData = [
    { location: 'Paris', rating: '5 stars' },
    { location: 'Rome', rating: '4 stars' },
    { location: 'Tokyo', rating: '5 stars' }
  ];

  const reviews = [
    { author: 'John Doe', text: 'Amazing experience! Would highly recommend.', rating: '5 stars' },
    { author: 'Jane Smith', text: 'Had a great time exploring different cultures.', rating: '4 stars' }
  ];

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="app-container">
      <ImageComponent />
      <TextComponent text="Explore the world with our travel packages!" />
      <TableComponent data={tableData} />
      <ButtonComponent onClick={handleClick} label="Book Now" />
      <div className="reviews-container">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <ReviewComponent key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default AppComponent;