import React, { useState } from "react";
import demoVideo from "../assets/video1.mp4";

const testimonials = [
  {
    name: "Binuka Somarathne",
    role: "Software Engineer",
    text: "Online learning with EDUOne boosted my web dev skills and helped me land my dream job!",
    video: {demoVideo} 
  },
  {
    name: "Jane Doe",
    role: "Full-Stack Developer",
    text: "The courses were amazing and easy to follow. Highly recommend EDUOne!",
    video: {demoVideo}
  }
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
    <section className="w-11/12 mx-auto py-12">
    
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        What our students say about us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
        <div className="bg-gray-900 text-white p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{testimonials[index].name}</h3>
            <p className="text-gray-400 mb-6">{testimonials[index].role}</p>
            <p className="text-3xl font-medium leading-snug">
              “{testimonials[index].text}”
            </p>
          </div>

       
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 text-xl hover:bg-gray-300"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl hover:bg-blue-600"
            >
              &#8594;
            </button>
          </div>
        </div>

        
        <div className="rounded-6xl overflow-hidden">
          <video
            src={demoVideo}
            controls
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
