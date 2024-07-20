import React, { useState } from 'react';

const AnalysisForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 mt-4">
      <div className="mb-4">
        
        <input
          type="text"
          name="name"
          id="name"
          placeholder='FULL NAME'
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-600 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        
        <input
          type="text"
          name="email"
          id="email"
          placeholder='EMAIL'
          value={formData.email}
          onChange={handleChange}
          className="border-gray-600 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder='MOBILE NO.'
          value={formData.mobile}
          onChange={handleChange}
          className="border-gray-600 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        
        <input
          type="text"
          name="message"
          id="message"
          placeholder='WRITE YOUR MESSAGE'
          value={formData.message}
          onChange={handleChange}
          className="border-gray-600 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox1"
            id="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="mr-2 "
          />
          <label htmlFor="checkbox1" className="text-gray-700">Website Designing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox2"
            id="checkbox2"
            checked={formData.checkbox2}
            onChange={handleChange}
            className="mr-2 "
          />
          <label htmlFor="checkbox2" className="text-gray-700">Graphic Designing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox3"
            id="checkbox3"
            checked={formData.checkbox3}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="checkbox3" className="text-gray-700">Digital Marketing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox4"
            id="checkbox4"
            checked={formData.checkbox4}
            onChange={handleChange}
            className="mr-2 "
          />
          <label htmlFor="checkbox4" className="text-gray-700">App Development</label>
        </div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-orange-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AnalysisForm;
