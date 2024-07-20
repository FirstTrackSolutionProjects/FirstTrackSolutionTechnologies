import React, { useState, useEffect } from 'react';
import Progressbar2 from './Progressbar2';

const Progress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Scrolling Progress Bar Example</h1>
      <Progressbar2 percentage={60} />
      {/* Add some content to enable scrolling */}
      <div className="h-screen bg-gray-100">Scroll down to see the progress bar in action</div>
      <div className="h-screen bg-gray-200"></div>
      <div className="h-screen bg-gray-300"></div>
    </div>
  );
};

export default Progress;
