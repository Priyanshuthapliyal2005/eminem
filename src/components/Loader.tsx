import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-t-4 border-b-4 border-gray-500 rounded-full animate-spin"></div>
        <div className="absolute inset-8 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
      </div>
      
      <div className="heading-text text-4xl text-white tracking-widest mb-4">
        <span className="glitch-effect" data-text="EMINEM">EMINEM</span>
      </div>
      
      <div className="graffiti-text text-xl text-primary">Legacy Loading...</div>
      
      <div className="mt-16 flex space-x-1">
        <div className="w-3 h-8 bg-primary animate-pulse"></div>
        <div className="w-3 h-12 bg-primary animate-pulse delay-75"></div>
        <div className="w-3 h-6 bg-primary animate-pulse delay-150"></div>
        <div className="w-3 h-10 bg-primary animate-pulse delay-300"></div>
        <div className="w-3 h-4 bg-primary animate-pulse delay-500"></div>
      </div>
    </div>
  );
};