import React, { useState } from 'react';
import Modal from './Modal';

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const correctPassword = 'ftst'; // Replace with the desired password

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsModalOpen(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password');
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
        <div className='text-sm md:text-base'>This content is password protected. To view it please enter your password below</div>
        <form onSubmit={handlePasswordSubmit} className=" p-6 ">
          <div className="text-sm md:text-base mb-4">Enter Password :</div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border focus:outline-none p-2 mb-4 w-full text-sm md:text-base"
            placeholder="Password"
          />
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
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
