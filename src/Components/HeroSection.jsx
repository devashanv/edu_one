import React from "react";
import bsvg from "../assets/b.svg";

const HeroSection = () => {
  return (
  <div className="max-w-4xl mx-auto py-8 text-center">
  <div className=" rounded-2xl px-4 py-2 inline-block">
    <h3 className="flex items-center justify-center text-sky-600 text-lg ">
      <img
        src={bsvg}
        alt="icon"
        className="w-5 h-5 mr-2"
      />
      Sri Lanka's #1 Online Education Platform
    </h3>
  </div>


      <h1 className="text-8xl md:text-7xl text-sky-600 mb-6 leading-tight mt-5">
        Unlock Your Potential with Future-Ready Learning
      </h1>

      <div className="text-center">
        <div className="inline-block text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          <p>Learn, grow, and succeed with expert-led courses</p>
          <p className="text-center">and hands-on mentorship</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
