import React from 'react';

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50' : 'w-full py-8'}`}>
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-gray-900 animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-gray-400 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default Loader;
