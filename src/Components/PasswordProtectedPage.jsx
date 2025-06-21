import React, { useState } from 'react';
import Modal from './Modal';
import { toast } from 'react-toastify';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const PasswordProtectedPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${BACKEND_URL}/join-us-requests/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json();
      if (data.success) {
        alert(data.message || 'Validated');
        localStorage.setItem("joinUsToken", data.data);
        setIsModalOpen(true);
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (err){
      console.error(err);
      alert("Something Went Wrong")
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-fit bg-gray-100 font-inter">
      {isModalOpen ? (
        <Modal closeModal={closeModal} />
      ) : (
        <div className='p-3 my-5'>
        <div className='text-sm md:text-base'>Enter your Join Us Credentials as provided in mail</div>
        <form onSubmit={handleSubmit} className=" p-6 ">
          <div>
            <div className="text-sm md:text-base mb-4">Email :</div>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="border focus:outline-none p-2 mb-4 w-full text-sm md:text-base"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <div className="text-sm md:text-base mb-4">Password :</div>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="border focus:outline-none p-2 mb-4 w-full text-sm md:text-base"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="bg-teal-500 text-sm md:text-base font-semibold text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
        </div>
      )}
    </div>
  );
};

export default PasswordProtectedPage;
