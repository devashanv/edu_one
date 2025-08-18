import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/course.jpeg";
import img2 from "../assets/course2.jpeg";
import img3 from "../assets/course3.jpeg";
import img4 from "../assets/course4.jpeg";
import img5 from "../assets/course5.jpeg";

const images = [
  { src: img1, title: "Web Development" },
  { src: img2, title: "UI/UX Design" },
  { src: img3, title: "Data Science" },
  { src: img4, title: "Digital Marketing" },
  { src: img5, title: "Cloud Computing" },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    if (currentIndex < images.length - itemsPerView) {
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-800">
          Explore Courses
        </h2>
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
              currentIndex >= images.length - itemsPerView &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex >= images.length - itemsPerView}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white relative"
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-4 text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
