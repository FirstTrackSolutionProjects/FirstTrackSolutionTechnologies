import React, { useState } from 'react';
import { countries } from 'countries-list';
import {v4 as uuidv4} from 'uuid'
const CareerForm = () => {
  const countryList = Object.values(countries);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    description: '',
    qualification: '',
    course:'',
    cv: null
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cvUUID = uuidv4();
    const reqUUID = uuidv4();
    const cvKey = `careerForm/${reqUUID}/${cvUUID}`
    const response = await fetch('/.netlify/functions/getPutSignedUrl',{
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({key:cvKey, filetype: formData.cv.type })
    })
    const responseBody = await response.json()
    const uploadURL = responseBody.uploadURL;
    await fetch(uploadURL, {
      method: "PUT",
      headers: {
        'Content-Type': formData.cv.type
      },
      body: formData.cv,
    }).catch(err => {alert(err); return});
    await fetch("/.netlify/functions/careerMail",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({formData, cvKey}),
    }).then(response => response.json()).then(result => alert(result.message))
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
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1"
              required
            />
          </div>
        </div>

        {/* Address Fields */}
        <div className="md:flex md:space-x-4">
          <div className="flex-1">
            <label htmlFor="streetAddress" className=" text-neutral-500 text-sm">
              Street Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder='Eg: 24 Wallaby Way'
              value={formData.streetAddress}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="city" className=" text-neutral-500 text-sm">
              City <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder='Eg: Sydney'
              value={formData.city}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="postalCode" className=" text-neutral-500 text-sm">
              Postal Code <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder='Eg: 2000'
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className=" text-neutral-500 text-sm">
              Country <span className='text-red-500'>*</span>
            </label>
            <select
              id="country"
              name="country" 
              onChange={handleChange}
              className="mt-1  focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-200 h-8 ">
              {countryList.map((country) => (
                <option key={country.name} value={formData.country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            
            
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className=" text-neutral-500 text-sm">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder='Your message here..'
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 focus:outline-none border w-full border-gray-700 bg-neutral-200 h-20 shadow-md p-1 "
          />
        </div>

        {/* Highest Qualification */}
        <fieldset>
          <legend className="text-sm font-medium text-neutral-500">Highest Qualification <span className='text-red-500'>*</span></legend>
          <div className="mt-2 space-y-2">
            
            <div className="flex items-center">
              <input
                type="radio"
                id="postgrad"
                name="qualification"
                value="Post Grduation"
                checked={formData.qualification === "Post Graduation"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="bachelor" className="ml-3 block font-medium text-neutral-500 text-sm">
              Post Graduation/Master's
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="grad"
                name="qualification"
                value="Graduation"
                checked={formData.qualification === "Graduation"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Graduation
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="btech"
                name="qualification"
                value="BTech"
                checked={formData.qualification === 'BTech'}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="doctorate" className="ml-3 block font-medium text-neutral-500 text-sm">
                BTech
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className=" font-medium text-neutral-500 text-sm">Course Applied <span className='text-red-500'>*</span></legend>
          <div className="mt-2 space-y-2">
            
            <div className="flex items-center">
              <input
                type="radio"
                id="sales"
                name="course"
                value="Sales Co-ordinator"
                checked={formData.course === "Sales Co-ordinator"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="bachelor" className="ml-3 block font-medium text-neutral-500 text-sm">
                Sales Co-ordinator
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="relOff"
                name="course"
                value="Relationship Officer"
                checked={formData.course === "Relationship Officer"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Relationship Officer
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="relManager"
                name="course"
                value="Relationship Manager"
                checked={formData.course === "Relationship Manager"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Relationship Manager
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="hre"
                name="course"
                value="Human Resource Executive"
                checked={formData.course === "Human Resource Executive"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Human Resource Executive (HRE)
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="hrIntern"
                name="course"
                value="HR Intern"
                checked={formData.course === "HR Intern"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              HR Intern
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="itIntern"
                name="course"
                value="IT Intern"
                checked={formData.course === "IT Intern"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              IT Intern
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="adminExe"
                name="course"
                value="Admin Executive"
                checked={formData.course === "Admin Executive"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Admin Executive
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="teleCaller"
                name="course"
                value="Tele Caller"
                checked={formData.course === "Tele Caller"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Tele Caller
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="clientRM"
                name="course"
                value="Client Relationship Manager"
                checked={formData.course === "Client Relationship Manager"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Client Relationship Manager [CRM]
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="corporateRM"
                name="course"
                value="Corporate Relationship Manager"
                checked={formData.course === "Corporate Relationship Manager"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="masters" className="ml-3 block font-medium text-neutral-500 text-sm">
              Corporate Relationship Manager [CRM]
              </label>
            </div>

          </div>
        </fieldset>

        {/* Upload CV */}
        <div>
          <label htmlFor="cv" className="  font-medium text-neutral-500 text-sm">
            Upload CV <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleFileChange}
            className="mt-1 focus:outline-none file:focus:outline-none w-full text-sm file:bg-teal-500 file:border-3 file:border-teal-500 file:font-bold file:text-white file:p-2 text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white font-bold bg-cyan-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
