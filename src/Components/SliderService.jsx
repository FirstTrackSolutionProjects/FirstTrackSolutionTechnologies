import React, { useState, useEffect } from 'react';
import Card from './Card';
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/outline';



const SliderService = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Card link="/info" title="Information Technology" desc="We provide cutting-edge Information Technology services designed to meet the evolving needs of businesses. Our team of experts offers tailored solutions including software development, cybersecurity, cloud computing, and IT consulting. We are committed to enhancing your operational efficiency, ensuring robust security, and driving innovation. Whether you need to optimize existing systems or implement new technologies, our services are aimed at delivering exceptional results. Partner with us to leverage the power of IT and transform your business into a future-ready enterprise." imgUrl={'images/serv1.jpg'} />,
    //<Card link="/finance" title="Financial Services" desc="We specialize in providing top-notch financial services tailored to your business needs. Our expertise includes financial software development, data analytics, cybersecurity, and blockchain technology. We deliver secure and efficient solutions to streamline your financial operations, enhance decision-making, and ensure compliance with industry regulations. Our team is dedicated to transforming your financial processes through innovative technology, enabling you to focus on growth and profitability. Partner with us to harness the power of IT in your financial services and stay ahead in a competitive market." imgUrl={'images/serv2.jpg'} />,
    <Card link="/training" title="Training & Development" desc="We offer comprehensive training and development services to empower your team with the latest skills and knowledge. Our programs cover a wide range of IT topics, including software development, cybersecurity, data analysis, and cloud computing. We provide customized training solutions tailored to your organization’s needs, ensuring your staff stays ahead in a rapidly evolving technological landscape. Our expert instructors deliver hands-on learning experiences, fostering innovation and enhancing productivity. Partner with us to invest in your team's growth and ensure they are equipped to tackle future challenges. Your success is our priority" imgUrl={'images/serv3.jpg'} />,
    <Card link="/recruit" title="Recruitment - Job Portal" desc="At our IT company, we offer specialized recruitment services to help you find the right talent for your business. Our team of experts understands the unique requirements of the IT industry and excels in sourcing skilled professionals across various domains, including software development, cybersecurity, data science, and cloud computing. We provide end-to-end recruitment solutions, from identifying and screening candidates to facilitating smooth onboarding. Our goal is to connect you with top-tier IT talent that fits your organizational culture and drives your business forward. Partner with us to build a strong, competent team. Your success is our mission" imgUrl={'images/serv4.jpg'} />,
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-800"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white md:p-2 rounded-full focus:outline-none"
      >
       {/* &#8592;*/}
       <ChevronLeftIcon className='h-8 w-6 text-white'/> 
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white md:p-2 rounded-full focus:outline-none"
      >
        <ChevronRightIcon className='h-8 w-6 text-white'/>
      </button>
    </div>
  );
};

export default SliderService;
