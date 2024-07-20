import React from 'react';
import PropTypes from 'prop-types';

const Progressbar2 = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 relative">
      <div
        className="bg-blue-500 h-full rounded-full flex items-center justify-end transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-xs font-semibold text-white mr-2">{percentage}%</span>
      </div>
    </div>
  );
};

Progressbar2.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progressbar2;
