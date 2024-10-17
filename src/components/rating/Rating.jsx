import { useState } from 'react';
import './rating.scss';

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    // You can send the rating to the backend here, e.g., through an API call
  };

  return (
    <div className="rating">
      <p>Rate this Gym:</p>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRating(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? '#FFD700' : '#ccc' }}
        >
          ★
        </span>
      ))}
      <p>Your rating: {rating} / 5</p>
    </div>
  );
}

export default Rating;
