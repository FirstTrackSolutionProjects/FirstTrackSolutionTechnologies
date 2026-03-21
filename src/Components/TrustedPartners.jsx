import React, { useEffect, useRef } from 'react';
import './trustedpartner.css';

const TrustedPartners = () => {
  const images = [
    '/images/partners/zoho.jpeg',
    '/images/partners/razorpay.jpeg',
    '/images/partners/aws.jpg',
    '/images/partners/hdfc.png',
    '/images/partners/hostinger.png',
    '/images/partners/icici.png',
    '/images/partners/indFill.png',
    '/images/partners/paytm.png',
    '/images/partners/phonpe.jpg',
    '/images/partners/netlify.png',
    '/images/partners/cashfree.png',
    '/images/partners/paypal.png'

  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!slider) return;

      scrollAmount += 1; // 🔥 speed control (increase/decrease)

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // reset for infinite loop
      }

      slider.style.transform = `translateX(-${scrollAmount}px)`;

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={sliderRef} className="flex w-max">
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="w-32 h-20 mx-3 md:w-52 md:h-32 md:mx-8 bg-white rounded-md p-2 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;