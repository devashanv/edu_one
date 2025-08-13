import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const SearchWithSlider = () => {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= slides.length - 5) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-10 left-0 right-0 z-10">
        <div className="max-w-xl mx-auto">
          <div className="flex items-stretch gap-2 h-14">
            <div className="flex-1 flex items-center bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center px-5 h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="e.g. UX Designer"
                  className="ml-3 flex-grow px-2 h-full focus:outline-none text-base border-0"
                />
              </div>
            </div>
            <button className="w-32 bg-sky-500 text-white rounded-full hover:bg-blue-700 transition-colors text-base font-medium flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden pt-24 pb-8 ">
        <div
          className="flex transition-transform duration-500 ease-in-out pt-9"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${slides.length * 25}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-1/7 flex-shrink-0 px-2">
              <div
                className="w-80 h-80 bg-cover bg-center rounded-xl shadow-lg"
                style={{
                  backgroundImage: `url(${slide.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchWithSlider;
