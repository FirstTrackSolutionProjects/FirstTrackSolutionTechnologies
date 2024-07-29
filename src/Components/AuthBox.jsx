import React, { useState } from 'react';

const AuthBox = () => {
  const [activeTab, setActiveTab] = useState('job');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [formData, setFormData] = useState({
    keyword: '',
    jobType: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement job search functionality here
    console.log('Search Jobs:', formData);
  };

  return (
    <div className="w-full max-w-lg m-5 font-inter">
      <div className="grid grid-cols-2 ">
        <button
          className={`text-lg py-2 px-4 bg-black bg-opacity-60 text-white ${activeTab === 'job' ? 'bg-black bg-opacity-60 text-white' : ''}`}
          onClick={() => handleTabClick('job')}
        >
          Find A Job
        </button>
        <button
          className={`text-lg py-2 px-4 bg-green-600 bg-opacity-60 text-white ${activeTab === 'talent' ? 'bg-green-600 bg-opacity-60 text-white' : ''}`}
          
        >
          Find Talent
        </button>
      </div>
      <div className={`p-4 ${activeTab === 'job' ? 'bg-black bg-opacity-60' : 'bg-green-600 bg-opacity-60'}`}>
        {activeTab === 'job' ? (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Find a Job</h2>
          <div className="my-8">
            
            <input
              type="text"
              name="Keyword"
              value={formData.keyword}
              onChange={handleChange}
              className="w-full p-2 text-white placeholder-white bg-black bg-opacity-60 rounded"
              placeholder="Job title, skills, or company"
              required
            />
          </div>
          <div className="my-8">
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 text-white placeholder-white bg-black bg-opacity-60  rounded"
              required
            >
              <option className='bg-white text-black'  value="">Select Job Type</option>
              <option className='bg-white text-black' value="full-time">Full-time</option>
              <option className='bg-white text-black' value="part-time">Part-time</option>
              <option className='bg-white text-black' value="contract">Contract</option>
              <option className='bg-white text-black' value="internship">Internship</option>
              <option className='bg-white text-black' value="temporary">Temporary</option>
            </select>
          </div>
          <div className="my-8">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 text-white placeholder-white bg-black bg-opacity-60  rounded"
              placeholder="Location"
              required
            />
          </div>
          <button type="submit" className="w-full bg-white  p-2 rounded hover:bg-orange-500 hover:text-white">
            Search Jobs
          </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-white">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300" />
            </div>
            <div>
              <label className="block text-white">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300" />
            </div>
            <div>
              <label className="block text-white">Confirm Password</label>
              <input type="password" className="w-full p-2 border border-gray-300" />
            </div>
            <button type="submit" className="w-full py-2 bg-white text-blue-500">Signup</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthBox;
