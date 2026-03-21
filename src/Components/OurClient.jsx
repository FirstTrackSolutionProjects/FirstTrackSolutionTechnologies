import React, { useRef, useEffect, useState } from "react";

const OurClients = () => {
  const sliderRef = useRef(null);

  const logos = [
    { name: "Jupiter Express", img: "/images/partners/jupiter.jpg" },
    { name: "7D Express", img: "/images/partners/7d.jpg" },
    { name: "Shipwale", img: "/images/partners/shipwale.png" },
    { name: "Fuddlins", img: "/images/partners/fuddins.png" },
    { name: "FirstTrack", img: "/images/partners/FirstTrack.png" },
  ];

  const [isDragging, setIsDragging] = useState(false);

  // 🔁 Auto Slide
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const autoSlide = () => {
      if (!slider || isDragging) return;

      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }

      animationFrame = requestAnimationFrame(autoSlide);
    };

    animationFrame = requestAnimationFrame(autoSlide);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // 🖱 Drag
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      setIsDragging(true);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      isDown = false;
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="flex overflow-hidden cursor-grab active:cursor-grabbing py-6"
    >
      {[...logos, ...logos].map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-5 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg min-w-[180px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Logo */}
          <img
            src={item.img}
            alt={item.name}
            className="h-16 md:h-20 object-contain mb-3"
          />

          {/* Name */}
          <p className="text-sm font-semibold text-gray-700 text-center">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurClients;