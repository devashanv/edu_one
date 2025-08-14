import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-10/12 mx-auto px-8 py-6 flex justify-between items-center">
      <div className="flex items-center">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M7 7h10v10"
            />
          </svg>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
