// ImageSlider.js
import React from 'react';

const ClientSlider = ({ images }) => {
  return (
    <div className="overflow-hidden relative w-full h-fit my-5">
      <div className="flex w-full h-fit animate-marquee">
        {images.concat(images).map((image, index) => (
          <div
            key={index}
            className="flex-none w-36 md:w-80 h-fit mx-5"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
