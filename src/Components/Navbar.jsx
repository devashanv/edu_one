import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
  
      <div>
        <span className="text-4xl font-semibold text-white">EduOne</span>
      </div>

   
      <div className="hidden md:flex space-x-10">
        <Link to="/home" className="text-black hover:text-blue-600">
          Home
        </Link>
        <Link to="/courses" className="text-black hover:text-blue-600">
          Courses
        </Link>
        <Link to="/jobPortal" className="text-black hover:text-blue-600">
          Job Portal
        </Link>
        <Link to="/blogs" className="text-black hover:text-blue-600">
          Blogs
        </Link>
        <Link to="/contactUs" className="text-black hover:text-blue-600">
          Contact Us
        </Link>
      </div>

      
      <div className="hidden lg:block">
        <button className="flex items-center gap-2 px-4 py-2 border-2 border-white bg-transparent text-white rounded-full hover:bg-blue-400 transition-colors">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </span>
        </button>
      </div>

    
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-6 z-50 md:hidden">
          <Link
            to="/home"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/jobPortal"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Job Portal
          </Link>
          <Link
            to="/blogs"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contactUs"
            className="text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
            <span>Join Now</span>
            <span className="bg-blue-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
