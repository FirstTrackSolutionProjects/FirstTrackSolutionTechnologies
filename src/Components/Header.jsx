import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa';
import RequestCallModal from './RequestCallModal';
const Header = () => {
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


  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isJoinUsDropdownOpen, setIsJoinUsDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const joinUsDropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(prevState => !prevState);
    setIsJoinUsDropdownOpen(false); // Ensure the other dropdown is closed
  };

  const toggleJoinUsDropdown = () => {
    setIsJoinUsDropdownOpen(prevState => !prevState);
    setIsServicesDropdownOpen(false); // Ensure the other dropdown is closed
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target) &&
        joinUsDropdownRef.current && !joinUsDropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
        setIsJoinUsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <header className="">
      <div className="container font-bold flex min-w-full justify-between items-center shadow-md p-2 px-6">
      <Link to="/" ><img src="images/logomain2.JPG" alt="logo" className='w-8 h-8 rounded-full object-cover md:w-12 md:h-12'></img></Link>
        <div className="hidden md:flex space-x-10 justify-evenly items-center">
        <Link to="" className='text-black hover:underline hover:decoration-orange-500'>HOME</Link>
            <Link  to="/career" className='text-black hover:underline hover:decoration-orange-500'>CAREER</Link>
            <div className="relative" ref={servicesDropdownRef}>
            <Link onClick={toggleServicesDropdown} to="/services" className='text-black hover:underline hover:decoration-orange-500 flex items-center'>SERVICES<FaChevronDown className="ml-2" /></Link>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Services</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
              </div>
            )}</div>
            <div className="relative " ref={joinUsDropdownRef}>
            <Link onClick={toggleJoinUsDropdown} to="/joinus" className='text-black hover:underline hover:decoration-orange-500 flex items-center'>JOIN US<FaChevronDown className="ml-2" /></Link>
            {isJoinUsDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                <Link to="/joinus" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">New Employee On Boarding</Link>
              </div>
            )}
            </div>
            <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
            <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
            <Link to="" onClick={openModal} className='text-black border-gray-700 border-2 p-2 hover:bg-orange-600 hover:text-white hover:border-orange-600'>Request Call</Link>
            {isModalOpen && <RequestCallModal closeModal={closeModal} />}
        </div>
        <div className="md:hidden spaxe-x-10">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6 text-orange-600" /> : <MenuIcon className="w-6 h-6 text-orange-600" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden items-center flex flex-col space-y-2 mt-2 mb-2">
            <Link to="/" className='text-black hover:underline hover:decoration-orange-500'>HOME</Link>
            <Link to="/career" className='text-black hover:underline hover:decoration-orange-500'>CAREER</Link>
            <div className="relative" ref={servicesDropdownRef}>
            <Link onClick={toggleServicesDropdown} to="/services" className='text-black hover:underline hover:decoration-orange-500'>SERVICES</Link>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Information Technology</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Financial Service</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Training & Development</Link>
                <Link to="" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">Recruitment<br/>Job Portal</Link>
              </div>
            )}
            </div>
            <div className="relative " ref={joinUsDropdownRef}>
            <Link onClick={toggleJoinUsDropdown} to="/joinus" className='text-black hover:underline hover:decoration-orange-500'>JOIN US</Link>
            {isJoinUsDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                <Link to="/joinus" className="block px-4 py-2 hover:bg-orange-600 hover:text-white text-sm">New Employee On Boarding</Link>
              </div>
            )} </div>
            <Link to="/contact" className='text-black hover:underline hover:decoration-orange-500'>CONTACT US</Link>
            <Link to="/about" className='text-black hover:underline hover:decoration-orange-500'>ABOUT</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
