import React from "react";
import bsvg from "../assets/b.svg";

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 text-center ">
  
      <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center " }}>
        <img
          src={bsvg}
          alt="icon"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        Sri Lankas's #1 Online Education Platform
      </h3>

    
      <h1 className="text-6xl md:text-6xl text-sky-600 mb-6 leading-tight">
        Unlock Your Potential with Future-Ready Learning
      </h1>

      <div className="text-center">
        <div className="inline-block text-xl text-gray mb-10 max-w-2xl mx-auto">
          <p>Learn, grow, and succeed with expert-led courses</p>
          <p className="text-center">and hands-on mentorship</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
