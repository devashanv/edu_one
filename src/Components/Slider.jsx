import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import img1 from "../assets/course.jpeg";
import img2 from "../assets/course2.jpeg";
import img3 from "../assets/course3.jpeg";
import img4 from "../assets/course4.jpeg";
import img5 from "../assets/course5.jpeg";




const images = [img1, img2, img3, img4, img5];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-10/12 mx-auto py-12">
   
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl  text-gray-800">Explore Courses</h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className={`p-3 bg-gray-200 hover:bg-gray-300 rounded-full ${
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 bg-blue-200 hover:bg-gray-300 rounded-full ${
              currentIndex >= images.length - 3 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex >= images.length - 3}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

    
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`, 
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_33.33%] rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[500px] object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
