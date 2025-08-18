import React from "react";
import bsvg from "../assets/b.svg";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 text-center">
      <div className="rounded-2xl px-4 py-2 inline-block">
        <h3 className="flex items-center justify-center text-sky-600 text-base sm:text-lg">
          <img src={bsvg} alt="icon" className="w-5 h-5 mr-2" />
          Sri Lanka's #1 Online Education Platform
        </h3>
      </div>

      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-sky-600 mb-6 leading-tight mt-5">
        Unlock Your Potential with Future Ready Learning
      </h1>

      <div className="text-center">
        <div className="inline-block text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 sm:max-w-2xl mx-auto px-8">
          <p>Learn, grow, and succeed with expert-led courses</p>
          <p className="text-center">and hands-on mentorship</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
