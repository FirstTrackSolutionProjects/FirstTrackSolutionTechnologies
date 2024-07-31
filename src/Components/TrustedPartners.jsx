import React, { useEffect, useRef } from 'react';
import './trustedpartner.css';

const TrustedPartners = () => {
  const images = [
    'images/partners/zoho.jpeg',
    'images/partners/razorpay.jpeg',
    'images/partners/aws.jpg',
    'images/partners/hdfc.png',
    'images/partners/hostinger.png',
    'images/partners/icici.png',
    'images/partners/indFill.png',
    'images/partners/paytm.png',
    'images/partners/phonpe.jpg'
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const startAnimation = () => {
      slider.style.animation = 'scroll 10s linear infinite';
    };

    const resetAnimation = () => {
      slider.style.animation = 'none';
      setTimeout(() => {
        slider.style.animation = 'scroll 10s linear infinite';
      }, 50);
    };

    slider.addEventListener('animationiteration', resetAnimation);
    startAnimation();

    return () => {
      clearInterval(intervalId);
      slider.removeEventListener('animationiteration', resetAnimation);
    };
  }, []);

  return (
    
    <div className="overflow-hidden whitespace-nowrap">
    <div ref={sliderRef} className="flex">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="w-32 h-20 mx-3 md:w-52 md:h-32 md:mx-8 bg-white rounded-md p-2" />
      ))}
      {images.map((src, index) => (
        <img key={index + images.length} src={src} alt={`Image ${index + 1}`} className="w-32 h-20 mx-3 md:w-52 md:h-32 md:mx-8 bg-white rounded-md p-2" />
      ))}
    </div>
  </div>
  );
};

export default TrustedPartners;
