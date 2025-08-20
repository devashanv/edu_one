import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-sky-200 text-gray-800">
      <div className="w-11/12 mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8 items-start">
          <div className="w-full max-w-xs">
            <img src={logo} alt="EduOne" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed">
              Empowering the next generation with innovative learning solutions.
              Explore, learn, and achieve with Edu One Sri Lanka&apos;s largest
              education platform.
            </p>
          </div>
          <div className="border-b border-gray-300 sm:border-none gap-15 pb-6 sm:pb-0 ">
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Job Portal</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-300 sm:border-none pb-6 sm:pb-0">
            <h3 className="font-bold mb-3">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">IT & Technology</a>
              </li>
              <li>
                <a href="#">Business & Management</a>
              </li>
              <li>
                <a href="#">Language & Communication</a>
              </li>
              <li>
                <a href="#">Creative Design</a>
              </li>
              <li>
                <a href="#">Science & Engineering</a>
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-300 sm:border-none pb-6 sm:pb-0">
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                <span>+94 72 888 4172</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <span>info@eduone.online</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-center">
          <div className="text-xs text-gray-600">
            © 2025 Edu One. All rights reserved. Powered by All in One Holdings
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
