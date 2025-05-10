import React, { useState, useEffect } from 'react';

function FavButton({ id, handleFav, isFavorite }) {
  const [isLocalFav, setIsLocalFav] = useState(isFavorite || false);

  useEffect(() => {
    setIsLocalFav(isFavorite || false);
  }, [isFavorite]);

  const toggleFav = () => {
    const newState = !isLocalFav;
    setIsLocalFav(newState);
    handleFav(id, newState);
  };

  return (
    <button
      onClick={toggleFav}
      className={`absolute top-3 right-3 text-xl transition`}
      title={isLocalFav ? 'Unsave' : 'Save'}
    >
      {isLocalFav ? '❤️' : '🤍'}
    </button>
  );
}

export default FavButton;