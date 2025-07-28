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

    // Prepare selected services
    const selectedServices = [];
    if (formData.checkbox1) selectedServices.push("Website Designing");
    if (formData.checkbox2) selectedServices.push("Graphic Designing");
    if (formData.checkbox3) selectedServices.push("Digital Marketing");
    if (formData.checkbox4) selectedServices.push("App Development");

    // Create WhatsApp message
    const message = `Hello, I would like to enquire about your IT services.
    
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Message: ${formData.message}
Selected Services: ${selectedServices.length > 0 ? selectedServices.join(", ") : "None"}`;

    const phoneNumber = "919040170727"; // Your WhatsApp number without + sign
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Optional: Alert user
    alert("Redirecting to WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 mt-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder='FULL NAME'
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-600 rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder='EMAIL'
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-600 rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="tel"
          name="mobile"
          placeholder='MOBILE NO.'
          pattern="[0-9]{10}"
          value={formData.mobile}
          onChange={handleChange}
          className="border border-gray-600 rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="message"
          placeholder='WRITE YOUR MESSAGE'
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-600 rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Website Designing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox2"
            checked={formData.checkbox2}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Graphic Designing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox3"
            checked={formData.checkbox3}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Digital Marketing</label>
        </div>
        <div className="flex items-center m-2">
          <input
            type="checkbox"
            name="checkbox4"
            checked={formData.checkbox4}
            onChange={handleChange}
            className="mr-2"
          />
          <label>App Development</label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AnalysisForm;
