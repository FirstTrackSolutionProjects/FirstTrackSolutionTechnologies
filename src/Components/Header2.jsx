// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import RequestCallModal from './RequestCallModal';

const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

   

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const careerRef = useRef(null);
  const servicesRef = useRef(null);

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu);
  };

  const handleClickOutside = (event) => {
    if (careerRef.current && !careerRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target) ) {
      setVisibleDropdown(false);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  


  return (
    <div>
    <header className="z-10 w-full bg-white font-semibold text-black p-3 flex justify-between shadow-md">
      <Link to="/" ><img src="images/logomain2.JPG" alt="logo" className='w-8 h-8 rounded-full object-cover md:w-12 md:h-12'></img></Link>
      <nav className="hidden md:flex justify-evenly space-x-10 items-center font-inter mr-8">
      <Link to="" className='text-black hover:underline hover:decoration-orange-500'>HOME</Link>
        <div
          className="relative z-20"
          onMouseEnter={() => handleMouseEnter('career')}
          ref={careerRef}
        >
          <Link to="/career"><div className="text-black hover:underline hover:decoration-orange-500">
            CAREER
          </div></Link>
          {visibleDropdown === 'career' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <Link to="/openings" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Current Openings</Link>
                <div onClick={openModal} className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Join Us</div>
                {isModalOpen && <RequestCallModal closeModal={closeModal} />}
            </div>
          )}
        </div>
        <div
          className="relative z-20"
          onMouseEnter={() => handleMouseEnter('services')}
          ref={servicesRef}
        >
          <Link to="/services"><div className="text-black hover:underline hover:decoration-orange-500">
            SERVICES
          </div></Link>
          {visibleDropdown === 'services' && (
            <div className="absolute container left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <Link to="/info" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                <Link to="/finance" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Services</Link>
                <Link to="/training" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="/recruit" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
                <Link to="/ecom" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">E-Commerce</Link>
            </div>
          )}
        </div>
        <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
            <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
            <div className='text-black hover:underline hover:decoration-orange-500'>LOGIN</div>
      </nav>
      <div className="md:hidden spaxe-x-10">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6 text-orange-600" /> : <MenuIcon className="w-6 h-6 text-orange-600" />}
          </button>
        </div>
    </header>
    {isOpen && (
        <div className="z-30 md:hidden items-center flex flex-col space-y-2 mt-2 mb-2">
          <Link to="" className='text-black hover:underline hover:decoration-orange-500'>HOME</Link>
        <div
          className="relative z-40"
          onMouseEnter={() => handleMouseEnter('career')}
          ref={careerRef}
        >
          <Link to="/career"><div className="text-black hover:underline hover:decoration-orange-500">
            CAREER
          </div></Link>
          {visibleDropdown === 'career' && (
            <div className="absolute container left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <Link to="/openings" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Current Openings</Link>
                <Link to="/joinus" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Join Us</Link>
            </div>
          )}
        </div>
        
        <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
            <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
            <div
          className="relative z-40"
          onMouseEnter={() => handleMouseEnter('services')}
          ref={servicesRef}
        >
          <Link to="/services"><div className="text-black hover:underline hover:decoration-orange-500">
            SERVICES
          </div></Link>
          {visibleDropdown === 'services' && (
            <div className="absolute container left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <Link to="/info" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                <Link to="/finance" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Services</Link>
                <Link to="/training" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="/recruit" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
                <Link to="/ecom" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">E-Commerce</Link>
            </div>
          )}
        </div>
            <div to="/about" className='text-black  p-2 hover:bg-orange-600 hover:text-white hover:border-orange-600'>LOGIN</div>
        </div>
      )}
    </div>
  );
};

export default Header2;
