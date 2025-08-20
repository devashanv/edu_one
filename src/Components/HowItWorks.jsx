import React from "react";
import { FaArrowLeft, FaCertificate, FaBriefcase } from "react-icons/fa";
import img1 from "../assets/dg.jpeg";
import logo from "../assets/logo.jpeg";
import reactlogo from "../assets/react.svg";
import figmalogo from "../assets/figma.svg";
import vslogo from "../assets/vs.svg";

const steps = [
  {
    id: "01",
    icon: <FaArrowLeft className="text-blue-500 text-2xl" />,
    title: "Discover Your Passion",
    desc: "Browse courses that match your interests and career goals.",
    color: "bg-blue-50",
    align: "left",
  },
  {
    id: "02",
    icon: <FaCertificate className="text-blue-500 text-2xl" />,
    title: "Learn, Grow, and Get Certified",
    desc: "Master skills and earn a valuable certificate.",
    color: "bg-blue-50",
    align: "right",
  },
  {
    id: "03",
    icon: <FaBriefcase className="text-blue-500 text-2xl" />,
    title: "Unlock Career Opportunities",
    desc: "Access our job portal and connect with top employers.",
    color: "bg-blue-50",
    align: "left",
  },
];

function Next() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-blue-50 to-white w-11/12 md:w-10/12 mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-8 relative">
            How It Works
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  step.align === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {step.align === "left" && (
                  <span className="hidden sm:block text-gray-300 text-6xl sm:text-7xl md:text-8xl mr-2 sm:mr-4">
                    {step.id}
                  </span>
                )}
                <div
                  className={`flex items-center gap-3 sm:gap-4 rounded-xl shadow-lg ${step.color} px-4 sm:px-6 py-4 sm:py-5 w-[90%] md:w-[80%]`}
                >
                  <div className="flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {step.align === "right" && (
                  <span className="hidden sm:block text-gray-300 text-6xl sm:text-7xl md:text-8xl ml-2 sm:ml-4">
                    {step.id}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end items-center">
          <div className="w-64 sm:w-72 md:w-80 h-80 md:h-[28rem] rounded-xl overflow-hidden shadow-xl relative z-10">
            <img src={img1} alt="Step" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-[90%] sm:w-[70%] flex items-center gap-4 sm:gap-6 z-30 bg-white rounded-lg p-2 shadow-md">
            <div className="overflow-hidden w-full">
              <div className="flex items-center gap-4 sm:gap-8 animate-scroll-horizontal">
                {[logo, reactlogo, figmalogo, vslogo].map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="Logo"
                    className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full object-cover"
                  />
                ))}
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">
                  10k Job Opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute top-4 md:top-10 -left-4 md:-left-6 w-40 sm:w-48 md:w-64 h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg z-20">
            <img src={img1} alt="Step" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Next;
