import React from "react";
import bsvg from "../assets/b.svg";

const HeroSection = () => {
  return (
    <div className=" mx-auto px-4 pt-10 pb-0 text-center">
      <div className="rounded-2xl px-4 py-2 inline-block">
        <h3 className="flex items-center justify-center text-sky-600 text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-lg">
          <img src={bsvg} alt="icon" className="w-5 h-5 mr-2" />
          Sri Lanka's #1 Online Education Platform
        </h3>
      </div>

      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl text-sky-600 mb-3 leading-tight mt-4">
        Unlock Your Potential with Future Ready Learning
      </h1>

      <div className="text-center">
        <div className="inline-block sm:text-6xl md:text-4xl lg:text-2xl xl:text-xl text-gray-600 sm:mb-4 lg:mb-16 md:pt-14 sm:pt-14 sm:max-w-2xl mx-auto px-6">
          <p>Learn, grow, and succeed with expert-led courses</p>
          <p className="text-center">and hands-on mentorship</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
