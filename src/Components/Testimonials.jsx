import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    quote:
      "Excellent logistics service! Fast delivery and great support team. Highly reliable partner for our business.",
    name: "Jupiter Express",
    title: "Logistics Partner",
    rating: 5,
    img: "/images/partners/jupiter.jpg",
  },
  {
    quote:
      "Reliable and cost-effective shipping solutions. Their service consistency is what makes them stand out.",
    name: "7D Express",
    title: "Courier Service",
    rating: 4,
    img: "/images/partners/7d.jpg",
  },
  {
    quote:
      "Smooth experience with real-time tracking and easy booking. Perfect platform for hassle-free shipping.",
    name: "Shipwale",
    title: "Shipping Platform",
    rating: 5,
    img: "/images/partners/shipwale.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ✅ Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonialsData.length - 1;
      if (next >= testimonialsData.length) next = 0;
      return next;
    });
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="bg-gray-50 py-16 flex justify-center">
      <div className="relative w-full max-w-3xl px-4">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Trusted by leading logistics partners
        </p>

        {/* Slider */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50 || velocity.x < -500) paginate(1);
                else if (offset.x > 50 || velocity.x > 500) paginate(-1);
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center border border-gray-200 max-w-xl w-full">
                
                {/* Avatar */}
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200 object-cover"
                />

                {/* ⭐ Rating */}
                <div className="flex mb-3">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - current.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic mb-6 text-base md:text-lg leading-relaxed">
                  “{current.quote}”
                </p>

                {/* Name */}
                <h3 className="font-bold text-lg text-gray-900">
                  {current.name}
                </h3>
                <p className="text-blue-600 text-sm">{current.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
     
      </div>
    </div>
  );
};

export default Testimonials;