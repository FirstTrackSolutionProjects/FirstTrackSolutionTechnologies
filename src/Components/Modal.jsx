import React, { useRef, useEffect, useState } from 'react';

const Modal = ({ closeModal }) => {
  const modalRef = useRef(null);

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Prevent the event from closing the modal
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state:'',
    postalCode: '',
    description: '',
    qualification: '',
    tenthDocument:null,
    twelfthDocument:null,
    graduationDocument:null,
    postGraduationDocument:null,
    pan:null,
    aadhar:null,
    passbook:null,
    letter:null,
    salary:null,
    photo:null,
    resume:null       
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-72 md:w-96 relative">
      <div className="overflow-y-auto max-h-[70vh] md:max-h-[90vh] scrollbar-hide">
        <button
          onClick={closeModal}
          className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-lg mb-4">Please let us know Your preferred time</h2>
        <form onSubmit={handleSubmit} className=" font-normal space-y-6">
        {/* Name Fields */}
        <div className="md:flex md:space-x-4 mt-3">
          <div className="flex-1">
            <label htmlFor="firstName" className="  text-neutral-500 text-sm">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='Eg: John'
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className=" text-neutral-500 text-sm">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Eg: Doe'
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border-gray-700 border bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
        </div>

        {/* Email and Phone Fields */}
        
          <div className="flex-1">
            <label htmlFor="email" className=" text-neutral-500 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Eg: john@doe.com'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className=" text-neutral-500 text-sm">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='Eg: 9542775289'
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>

          {/* Address Fields */}
        
          <div className="flex-1">
            <label htmlFor="streetAddress" className=" text-neutral-500 text-sm">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder='Eg: 24 Wallaby Way'
              value={formData.streetAddress}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="md:flex md:space-x-4">
          <div className="flex-1">
            <label htmlFor="city" className=" text-neutral-500 text-sm">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder='Eg: Sydney'
              value={formData.city}
              onChange={handleChange}
              className="mt-1  text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className=" text-neutral-500 text-sm">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder='Eg: New South Wales'
              value={formData.state}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          </div>
          <div className="flex-1">
            <label htmlFor="postalCode" className=" text-neutral-500 text-sm">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder='Eg: 2000'
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="qualification" className=" text-neutral-500 text-sm">
              Qualification
            </label>
            <select
              id="qualification"
              name="qualification" 
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
              
                <option value={formData.qualification}>12th</option>
                <option value={formData.qualification}>Graduation</option>
                <option value={formData.qualification}>Post Graduation</option>
             
            </select>
            
            
          </div>
          
        
        

        
        

        {/*Docs upload*/}
       <div className='px-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="tenthDocument">
            10th Document
          </label>
          <input
            type="file"
            id="tenthDocument"
            name='tenthDocument'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="twelfthDocument">
            12th Document
          </label>
          <input
            type="file"
            id="twelfthDocument"
            name='twelfthDocument'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="graduationDocument">
            Graduation Document
          </label>
          <input
            type="file"
            id="graduationDocument"
            name='graduationDocument'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Post Graduation Document
          </label>
          <input
            type="file"
            id="postGraduationDocument"
            name='postGraduationDocument'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            PAN Card
          </label>
          <input
            type="file"
            id="pan"
            name='pan'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Aadhar Card
          </label>
          <input
            type="file"
            id="aadhar"
            name='aadhar'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Bank Passbook
          </label>
          <input
            type="file"
            id="passbook"
            name='passbook'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
           If any experience-Offer Letter/Relieving letter/Experience Certificate
          </label>
          <input
            type="file"
            id="letter"
            name='letter'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Latest Salary Slip-3 Months
          </label>
          <input
            type="file"
            id="slary"
            name='salary'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name='photo'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        </div>

       {/* Description */}
       <div>
          <label htmlFor="description" className=" text-neutral-500 text-sm">
            Post Applied For
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-20 shadow-md p-1 "
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flexjustify-center py-2 px-4 border border-transparent text-sm text-white  bg-sky-500"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Modal;
