import React,{useEffect, useState} from "react";
import '../index.css';

const Openings=()=>{
    useEffect(() => {
        document.title = "Current Openings - First Track Solution Technologies";
    }, []); 

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
    return(
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(images/serv3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-end h-full">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg m-5">
          <h2 className="text-2xl font-bold mb-6 text-center">Find a Job</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Keyword</label>
            <input
              type="text"
              name="keyword"
              value={formData.keyword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Job title, skills, or company"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="City, state, or zip"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Search Jobs
          </button>
        </form>
      </div>
    </div>
    )
}


export default Openings;