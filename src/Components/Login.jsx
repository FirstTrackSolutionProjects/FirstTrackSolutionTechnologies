import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email, 'Password:', password);
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-3 md:p-6 w-full md:h-[500px] font-inter">
        <h2 className="md:text-4xl font-bold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">Hello!<br/>Sign in to continue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full md:px-3 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs md:text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full md:px-3 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 "
            />
          </div>
          <div className="md:flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700 text-xs md:text-[15px]">Keep me signed in</span>
                </label>
                <div className='my-3'><a href="#" className="text-sky-900 hover:underline text-xs md:text-[15px]">
                  Forgot password?
                </a></div>
              </div>
          <div>
            <button
              type="submit"
              className=" text-white w-full flex justify-center md:py-2 md:px-4 border-2 p-1  bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 rounded-md shadow-sm text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-xs md:text-base">
                Don't have an account?{' '}
                <button
                  className="text-sky-900 hover:underline"
                  onClick={navigateToSignup}
                >
                  Sign up
                </button>
              </p>
            </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
