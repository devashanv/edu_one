import React, { useState, useEffect } from "react";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const SearchWithSlider = ({ onSearch }) => {
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
  const [searchTerm, setSearchTerm] = useState("");

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
  }, [slides.length]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <div className="z-10 mb-4">
        <div className="max-w-xl mx-auto">
          <div className="flex items-stretch gap-2 h-14">
            <div className="flex-1 flex items-center bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center px-4 h-full">
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
            <button
              className="w-32 bg-sky-500 text-white rounded-full hover:bg-blue-700 transition-colors text-base font-medium flex items-center justify-center"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden pb-4 pt-2 sm:pt-4 lg:pt-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${slides.length * 25}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-1/7 flex-shrink-0 px-2">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-cover bg-center rounded-xl shadow-lg"
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
