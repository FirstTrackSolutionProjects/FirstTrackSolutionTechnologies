import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-5">Forgot Password</h2>
      <p className="mb-5">Enter your email to reset your password.</p>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded-md"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Send Reset Link
      </button>
      <div className="mt-3">
        <Link to="/login" className="text-blue-500 underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
