import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image10 from "../assets/image10.jpg";

const Search = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const slidesToShow = windowWidth < 640 ? 1 : windowWidth < 1024 ? 3 : 5;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image10,
  ];

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
   <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">

      <div className="z-10 mb-6">
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

      <div className="overflow-hidden p-1">
        <Slider key={windowWidth} {...settings}>
          {slides.map((img, index) => (
            <div key={index} className="px-1">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Search;
