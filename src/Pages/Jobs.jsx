// src/Pages/Jobs.jsx
import React from "react";

const Jobs = () => {
  
  React.useEffect(() => {
    window.location.href = "https://fts.firsttracksolutiontechnologies.com/jobs"; // 🔁 Replace with your real link
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-600">Redirecting to our Job Portal...</p>
    </div>
  );
};

export default Jobs;
