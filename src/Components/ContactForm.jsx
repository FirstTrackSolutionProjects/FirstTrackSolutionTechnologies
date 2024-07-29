import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="md:flex md:space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="  text-neutral-500 text-sm">
              First Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='Eg: John'
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full  border border-gray-600 shadow-md bg-neutral-200 h-8 p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className=" text-neutral-500 text-sm">
              Last Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Eg: Doe'
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full border-gray-700 border bg-neutral-200 h-8 shadow-md p-1 "
              required
            />
          </div>
        </div>

        {/* Email and Phone Fields */}
        <div className="md:flex md:space-x-4">
          <div className="flex-1">
            <label htmlFor="email" className=" text-neutral-500 text-sm">
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Eg: john@doe.com'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className=" text-neutral-500 text-sm">
              Phone <span className='text-red-500'>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='Eg: 9542775289'
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1"
              required
            />
          </div>
        </div>

        
        {/* Description */}
        <div>
          <label htmlFor="description" className=" text-neutral-500 text-sm">
            Message
          </label>
          <textarea
            id="description"
            name="description"
            placeholder='Your your message here..'
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-20 shadow-md p-1 "
          />
        </div>

       
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm text-white font-bold bg-sky-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
