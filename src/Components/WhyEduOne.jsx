import React from "react";
import demoVideo from "../assets/video1.mp4";
import desktopIcon from "../assets/d.svg";
import msgIcon from "../assets/m.svg";
import globeIcon from "../assets/g.svg";
import Image from "../assets/circle.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

function Video() {
  return (
    <div className="bg-white py-12 px-4 md:px-8 relative z-0">
      {/* Heading Section */}
      <div className="w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl text-black leading-tight mb-6">
          <span className="block">Why eduOne is</span>
          <span className="block">Your Best Learning</span>
          <span className="block">Choice?</span>
        </h1>
        <div className="text-lg text-gray-600 max-w-2xl mx-auto">
          <p>
            Unlock your true potential and discover a world full of opportunities
          </p>
          <p>that align with your skills, interests, and aspirations</p>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 z-10">
        {/* Background Circle */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50 rounded-full top-1/2 -translate-y-1/2 z-0"></div>

        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full md:w-auto items-center md:items-start z-10">
          {/* Learn Anytime Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px]">
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4 text-4xl">
                <img
                  src={desktopIcon}
                  alt="Desktop Icon"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold">Learn Anytime, Anywhere</h3>
              <p className="text-gray-600 text-sm mt-2">
                Access quality education at your convenience
              </p>
              <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-full hover:bg-blue-600">
                Learn now
              </button>
            </div>
          </div>

          {/* Active Learners Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px] flex items-center relative">
            <div className="text-blue-600 text-3xl mr-4">
              <img
                src={globeIcon}
                alt="Globe Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">1000 +</h4>
              <p className="text-gray-600 text-sm">
                Active learners across Sri Lanka
              </p>
            </div>

            {/* Animated Arrow BELOW Active Learners */}
            <img
              src={arrow1}
              alt="Arrow Animation"
              className="absolute -bottom-16 -right-4 w-16 h-16 animate-fade-in"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-[90%] sm:w-[300px] md:w-[360px] h-[300px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg z-10">
          <img
            src={Image}
            alt="Background"
            className="absolute w-[180%] h-[180%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          />
          <video
            src={demoVideo}
            className="w-full h-full object-cover relative z-10"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full md:w-auto items-center md:items-start z-10">
          {/* Industry Connections Card */}
          <div className="relative bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px] flex items-center justify-center -mt-6">
            {/* Animated Arrow ABOVE Industry Connections */}
            <img
              src={arrow2}
              alt="Arrow Animation"
              className="absolute -top-12 left-0 w-16 h-16 transform -translate-x-4 animate-fade-in"
            />
            <div className="flex items-center">
              <div className="mr-4">
                <img src={msgIcon} className="w-12 h-12" alt="Message Icon" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Industry Connections</h4>
              </div>
            </div>
          </div>

          {/* Explore Courses Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px] relative">
            <img
              src={globeIcon}
              alt="Top Globe"
              className="w-10 h-10 absolute top-4 left-1/2"
            />
            <div className="flex flex-col items-center text-center mt-10">
              <h3 className="text-lg font-semibold">
                Explore a World of Courses
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Find diverse programs to match your career and academic
                ambitions
              </p>
              <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-full hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
