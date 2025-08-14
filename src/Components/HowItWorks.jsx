import React from "react";
import { FaArrowLeft, FaCertificate, FaBriefcase } from "react-icons/fa";
import img1 from "../assets/dg.jpeg"; 
import logo from "../assets/logo.jpeg";   

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
    color:"bg-blue-50",
    align: "left",
  },
];

function Next() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-white w-10/12 mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
      
        <div className="flex-1">
          <h2 className="text-5xl  text-gray-800 mb-12 relative">
            How It Works
          </h2>
          <div className="space-y-12 bg">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  step.align === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {step.align === "left" && (
                  <span className="text-gray-300 text-8xl mr-4">
                    {step.id}
                  </span>
                )}
                <div
                  className={`flex items-center gap-4 rounded-xl shadow-lg ${step.color} px-6 py-5 w-[80%]`}
                >
                  <div className="flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-xl  text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
                {step.align === "right" && (
                  <span className="text-gray-300 text-8xl ml-4">
                    {step.id}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative flex justify-end items-center">
         
          <div className="w-80 h-[28rem] rounded-xl overflow-hidden shadow-xl relative z-10">
            <img
              src={img1}
              alt="Step"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[24rem] left-0 w-[60%] flex items-center gap-6 z-30 bg-white rounded-lg">
            <div className="overflow-hidden w-full">
              <div className="flex items-center gap-8 animate-scroll-horizontal">
                {[logo, logo, logo, logo].map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="Logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ))}
                <p className="text-lg font text-gray-700 whitespace-nowrap">
                  10k Job Opportunities
                </p>
                {[logo, logo, logo].map((item, index) => (
                  <img
                    key={index + 10}
                    src={item}
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-10 -left-6 w-64 h-72 rounded-xl overflow-hidden shadow-lg z-20">
            <img
              src={img1}
              alt="Step"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Next;
