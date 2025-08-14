import React, { useState } from "react";
import demoVideo from "../assets/video1.mp4";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Binuka Somarathne",
    role: "Software Engineer",
    text: "Online learning with EDUOne boosted my web dev skills and helped me land my dream job!",
  },
  {
    name: "Kamal Somarathne",
    role: "Full-Stack Developer",
    text: "The courses were amazing and easy to follow. Highly recommend EDUOne!",
  },
  {
    name: "Amal Somarathne",
    role: "UI/UX Designer",
    text: "Fantastic learning experience! The projects were very practical and engaging.",
  },
];

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-10/12 mx-auto py-12">
      <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 text-left">
        What Our Students Say About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative bg-gray-900 text-white p-8 rounded-2xl flex flex-col justify-between h-[460px]">
          <div className="overflow-hidden w-full flex-1 flex items-center">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${index * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 flex flex-col justify-center"
                >
                  <h3 className="text-2xl ">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.role}</p>
                  <p className="text-4xl  leading-snug">
                    “{item.text}”
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-6 left-8 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 text-lg hover:bg-gray-400 transition"
            >
             <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg hover:bg-blue-600 transition"
            >
             <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden h-[460px] flex">
          <video
            src={demoVideo}
            controls
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
