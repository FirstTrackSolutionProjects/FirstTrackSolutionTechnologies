import React from 'react';

const ClientSingleSlide = ({ images }) => {
  return (
    <div className="flex-none w-full flex">
      {images.map((image, idx) => (
        <img key={idx} src={image} alt={`Slide ${idx}`} className="w-1/3" />
      ))}
    </div>
  );
};

export default ClientSingleSlide;
