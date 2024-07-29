import React, { useState } from 'react';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate email and mobile number (Add your own validation logic)
      if (formData.email && formData.mobile) {
        // Simulate sending OTP
        console.log('Sending OTP to mobile:', formData.mobile);
        setStep(2);
        setErrorMessage('');
      } else {
        setErrorMessage('Please enter a valid email and mobile number.');
      }
    } else if (step === 2) {
      // Validate OTP (Add your own validation logic)
      if (formData.otp === '123456') { // Example OTP
        setStep(3);
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid OTP. Please try again.');
      }
    } else if (step === 3) {
      // Validate new passwords
      if (formData.newPassword === formData.confirmPassword) {
        console.log('Password reset successfully');
        setStep(1);
        setErrorMessage('');
      } else {
        setErrorMessage('Passwords do not match. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-fit py-5 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500">Forgot Password</h2>
        <p className="mb-5">Enter your email to reset your password.</p>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {step === 1 && (
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="Mobile Number"
              required
            />
            <button onClick={handleNextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Send OTP
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="Enter OTP"
              required
            />
            <button onClick={handleNextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Verify OTP
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="New Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="Confirm Password"
              required
            />
            <button onClick={handleNextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
