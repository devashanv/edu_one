import React from "react";

const Navbar = () => {
  return (
    
    <nav className=" w-10/12 mx-auto px-8 py-6 flex justify-between items-center">
      <div className="flex items-center">
        
        <span className="text-4xl font-semibold text-white">EduOne</span>
      </div>

      <div className="hidden md:flex space-x-10">
        <a href="#" className="text-black hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-black hover:text-blue-600">
          Courses
        </a>
        <a href="#" className="text-black hover:text-blue-600">
          Job Portal
        </a>
        <a href="#" className="text-black hover:text-blue-600">
          Blogs
        </a>
        <a href="#" className="text-black hover:text-blue-600">
          Contact Us
        </a>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 border border-white bg-transparent text-white rounded-full hover:bg-blue-700 transition-colors">
        <span>Join Now</span>
        <span className="bg-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2563eb"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
