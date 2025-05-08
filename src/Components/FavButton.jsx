import React, { useState } from 'react';

function FavButton({ id, handleFav }) {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    const newState = !isFav;
    setIsFav(newState);
    handleFav(id, newState);
  };

  return (
    <button
      onClick={toggleFav}
      className={`absolute top-3 right-3 text-xl transition`}
      title={isFav ? 'Unsave' : 'Save'}
    >
      {isFav ? '❤️' : '🤍'}
    </button>
  );
}

export default FavButton;
