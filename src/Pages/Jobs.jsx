// src/Pages/Jobs.jsx
import React from "react";

const Jobs = () => {
  // Auto-redirect to external job portal when this page loads
  React.useEffect(() => {
    window.location.href = "https://deploy-preview-4--ftst-job-consulting.netlify.app/jobs"; // 🔁 Replace with your real link
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-600">Redirecting to our Job Portal...</p>
    </div>
  );
};

export default Jobs;
