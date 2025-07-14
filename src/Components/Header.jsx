import React, { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesDropdownRef = useRef(null);
  const careerDropdownRef = useRef(null);

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
    setIsCareerDropdownOpen(false);
  };

  const handleCareerMouseEnter = () => {
    setIsCareerDropdownOpen(true);
    setIsServicesDropdownOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (
      servicesDropdownRef.current &&
      !servicesDropdownRef.current.contains(event.target)
    ) {
      setIsServicesDropdownOpen(false);
    }
    if (
      careerDropdownRef.current &&
      !careerDropdownRef.current.contains(event.target)
    ) {
      setIsCareerDropdownOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
    <header className="bg-neutral-200 font-inter shadow-lg w-full font-semibold text-black py-2 px-3 flex z-10 justify-between items-center">
    <div className='flex font-playfair items-center text-xs md:text-base  text-gray-800'><Link to="/" ><img src="images/logomain2.JPG" alt="logo" className='w-8 h-8 rounded-full object-cover md:w-12 md:h-12 mr-4'></img></Link>
        FIRST TRACK SOLUTION TECHNOLOGIES</div>
        <nav className="hidden md:flex justify-evenly space-x-10 items-center font-inter mr-8">
        <Link to="" className='text-black hover:underline hover:decoration-orange-500'>HOME</Link>
      <div className="relative z-20" ref={servicesDropdownRef} onMouseEnter={handleServicesMouseEnter}>
      <Link to="/services"><div className="text-black hover:underline hover:decoration-orange-500">
            SERVICES
          </div></Link>
        {isServicesDropdownOpen && (
            <div className="absolute bg-gray-800 text-white  shadow-md rounded-md mt-2 w-48">
                <Link to="/info" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                {/*<Link to="/finance" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Services</Link>*/}
                <Link to="/training" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="/jobs" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
                <a href='https://firsttrack.site/' target='_blank' className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Logistics</a>
            
            </div>
        )}
      </div>

      <div className="relative z-20" ref={careerDropdownRef} onMouseEnter={handleCareerMouseEnter}>
      <Link to="/career"><div className="text-black hover:underline hover:decoration-orange-500">
            CAREER
          </div></Link>
        {isCareerDropdownOpen && (
            
          <div className="absolute bg-gray-800 text-white  shadow-md rounded-md mt-2 w-48">
            <Link to="/openings" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Current Openings</Link>
            <Link to="/joinus" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Join Us</Link>
            {/*<button
              onClick={() => {
                handleModalToggle();
                setIsCareerDropdownOpen(false);
              }}
              className="block px-4 py-2 hover:bg-orange-600 hover:text-white w-full text-sm text-left"
            >
              Join Us
            </button> */}
          </div>
        )}
        
      </div>

      <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
            <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
            <a href="https://hrms.firsttracksolutiontechnologies.com/" target="_blank">HRMS</a>
      {isModalOpen && <Modal closeModal={handleModalToggle} />}
      </nav>
      <div className="md:hidden spaxe-x-10">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6 text-orange-600" /> : <MenuIcon className="w-6 h-6 text-orange-600" />}
          </button>
        </div>
    </header>
    {isOpen && (
      <div className="z-50 bg-white shadow-lg md:hidden items-center flex flex-col space-y-2 mb-2">
      <Link to="" className='text-black text-center  hover:underline hover:decoration-orange-500'>HOME</Link>
      

      <div className="relative z-20" ref={careerDropdownRef} onMouseEnter={handleCareerMouseEnter}>
      <Link to="/career"><div className="text-black hover:underline hover:decoration-orange-500">
            CAREER
          </div></Link>
        {isCareerDropdownOpen && (
            
          <div className="absolute bg-gray-800 text-white shadow-md rounded-md mt-2 w-48">
            <Link to="/openings" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Current Openings</Link>
            <Link to="/joinus" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Join Us</Link>
            {/*<button
              onClick={() => {
                handleModalToggle();
                setIsCareerDropdownOpen(false);
              }}
              className="block px-4 py-2 hover:bg-orange-600 hover:text-white w-full text-sm text-left"
            >
              Join Us
            </button>*/}
          </div>
        )}
        
      </div>
      <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
      <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
      <div className="relative z-20" ref={servicesDropdownRef} onMouseEnter={handleServicesMouseEnter}>
      <Link to="/services"><div className="text-black hover:underline hover:decoration-orange-500">
            SERVICES
          </div></Link>
        {isServicesDropdownOpen && (
            <div className="absolute bg-gray-800 text-white shadow-md rounded-md mt-2 w-48">
                <Link to="/info" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                {/*<Link to="/finance" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Services</Link>*/}
                <Link to="/training" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="/jobs" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
            
            </div>
        )}
      </div>
      <a
        href="https://fts.firsttracksolutiontechnologies.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className='text-black hover:underline hover:decoration-orange-500'
      >
        CONSULTING
      </a>

      <a
        href="https://ftst-job-consulting.netlify.app/loan" 
        target="_blank"
        rel="noopener noreferrer"
        className='text-black hover:underline hover:decoration-orange-500'
      >
        FINTECH
      </a>



      
            <a href="https://hrms.firsttracksolutiontechnologies.com/" target="_blank">HRMS</a>
      {isModalOpen && <Modal closeModal={handleModalToggle} />}
      </div>
      )}
      </div>
  );
};

export default Header;
