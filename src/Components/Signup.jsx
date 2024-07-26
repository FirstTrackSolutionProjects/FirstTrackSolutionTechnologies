import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('User registered:', formData);
  };

  return (
    <div className=" mx-auto h-[420px] p-5 border shadow-sm bg-white font-inter">
      <h2 className="md:text-3xl text-center font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500">New User? Register Here!!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full md:p-2 mb-3 border rounded-md text-sm p-1"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full md:p-2 mb-3 border rounded-md text-sm p-1"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full md:p-2 mb-3 border rounded-md text-sm p-1"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full md:p-2 mb-3 border rounded-md text-sm p-1"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full md:p-2 mb-3 border rounded-md text-sm p-1"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white md:p-2 text-sm md:text-base rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
