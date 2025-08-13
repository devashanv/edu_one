import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
    
      <h1 className="text-6xl text-blue-700 mb-4">
        Unlock Your Potential with Future-Ready Learning
      </h1>
      
   
      <p className="text-lg text-gray-600 mb-8">
        Learn, grow, and succeed with expert-led courses and hands-on mentorship
      </p>
      
    
      <div className="border-t border-gray-200 mb-8"></div>
      
     
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-300 p-2">
        <div className="flex items-center bg-gray-100 rounded px-3 py-2 mr-2">
          <span className="text-gray-500 font-medium mr-2">Q</span>
          <span className="text-gray-500 italic">e.g. UX Designer</span>
        </div>
        <input 
          type="text" 
          placeholder="Search"
          className="flex-grow px-4 py-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default HeroSection;