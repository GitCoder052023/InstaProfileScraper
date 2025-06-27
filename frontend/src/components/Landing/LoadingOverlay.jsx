import React from 'react';

const LoadingOverlay = ({ isLoaded }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
        <div className="text-sm text-gray-400 animate-pulse">Loading experience...</div>
      </div>
    </div>
  );
};

export default LoadingOverlay;