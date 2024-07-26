import React from 'react';
import './marquee.css';

const ImageMarquee = () => {
  const images = [
    'images/partners/jupiter.jpg',
    'images/partners/7d.jpg',
    'images/partners/fuddin.jpg',
    'images/partners/fuddin2.jpg',
  ];

  return (
    <div className="overflow-hidden ">
      <div className="marquee-content ">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className="h-40 mx-5 w-96 object-cover" />
        ))}
        
      </div>
    </div>
  );
};

export default ImageMarquee;
