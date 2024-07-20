import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage,title }) => {
  return (
    <div className='py-3'><div className='text-gray-700 text-sm'>{title}</div>
    <div className="w-full bg-gray-600 rounded-full h-1 md:h-2 relative">
      <div
        className="bg-orange-600 h-full rounded-full flex items-center justify-end mt-2"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-[10px] md:text-xs font-semibold bg-gray-600 h-6 md:h-8 p-1 md:p-2 text-white mr-2">{percentage}%</span>
      </div>
    </div></div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
