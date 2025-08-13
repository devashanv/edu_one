import React from "react";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-3">
            L
          </div>
          <span className="text-xl font-semibold text-gray-800">EduOne</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Courses
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Job Portal
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Blogs
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact Us
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Join Us















































          </button>
        </div>
      </nav>

      <section>
         test section
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Unlock Your Potential with Future-Ready Learning
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Learn, grow, and succeed with expert-led courses and hands-on
          mentorship
        </p>

        <div className="w-full h-px bg-gray-200 mb-10"></div>

        <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center bg-gray-100 px-4 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-200">
            <span className="font-medium text-gray-500 mr-2">Q</span>
            <span className="text-gray-500 italic">e.g. UX Designer</span>
 **6*   </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-6 py-4 focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
