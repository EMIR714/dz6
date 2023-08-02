import React, { useState } from 'react';
import './Slider.css'; // Подключение файла со стилями

const Slider = () => {
    const photos = [
    'm2.jpg',
    'm3.jpg',
    'm4.jpg',
    'm5.jpg',
    ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="slider-container">
      <img src={`/${photos[currentPhotoIndex]}`} alt={`Photo ${currentPhotoIndex + 1}`} />

      <button className="prev-button" onClick={goToPreviousPhoto}>
        Назад
      </button>
      <button className="next-button" onClick={goToNextPhoto}>
        Далее
      </button>
    </div>
  );
};

export default Slider;

