import React from "react";

const StartupIndia = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 mt-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        Startup India Certified
      </h1>
      <img
        src="/images/startupindia.jpg"
        alt="Startup India"
        className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
      />
    </div>
  );
};

export default StartupIndia;
