import React from 'react';

const SAILogoSimple = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 animate-pulse opacity-80"></div>
      
      {/* Glowing ring */}
      <div className="absolute inset-1 rounded-full border-2 border-cyan-300 opacity-60 animate-spin" style={{animationDuration: '3s'}}></div>
      
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        {/* Robot head icon */}
        <div className="relative mb-1">
          {/* Head */}
          <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded border border-cyan-300 relative">
            {/* Eyes */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            {/* Mouth */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-cyan-300 rounded"></div>
          </div>
          {/* Body */}
          <div className="w-4 h-3 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b mx-auto border-x border-b border-cyan-300"></div>
        </div>
        
        {/* sAI text */}
        <div className="text-xs font-bold tracking-wider">sAI</div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
};

export default SAILogoSimple;