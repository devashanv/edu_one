import React, { useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import devIcon from "../assets/c1.svg";
import uiuxIcon from "../assets/u.svg";
import mgmtIcon from "../assets/mt.svg";
import langIcon from "../assets/l.svg";
import hrIcon from "../assets/a.svg";
import marketingIcon from "../assets/mk.svg";
import reactLogo from "../assets/react.svg";
import figmalogo from "../assets/figma.svg";
import vsLogo from "../assets/vs.svg";

const categories = [
  { name: "Developing", icon: devIcon },
  { name: "UI/UX Design", icon: uiuxIcon },
  { name: "Management", icon: mgmtIcon },
  { name: "Languages", icon: langIcon },
  { name: "Accounting", icon: mgmtIcon },
  { name: "Human Resource", icon: hrIcon },
  { name: "Marketing", icon: marketingIcon },
];

const courses = {
  Developing: [
    {
      id: 1,
      img: reactLogo,
      title: "React Basics",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: figmalogo,
      title: "Advanced React",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: vsLogo,
      title: "JavaScript Mastery",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: figmalogo,
      title: "Next.js Pro",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: vsLogo,
      title: "React Basics",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Advanced React",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: vsLogo,
      title: "JavaScript Mastery",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: figmalogo,
      title: "Next.js Pro",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],
  "UI/UX Design": [
    {
      id: 1,
      img: vsLogo,
      title: "UI/UX Design",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: figmalogo,
      title: "UI/UX Design",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "UI/UX Design",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],
  Management: [
    {
      id: 1,
      img: reactLogo,
      title: "Management",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Management",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Management",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Management",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: "Management",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Management",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Management",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Management",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],
  Languages: [
    {
      id: 1,
      img: reactLogo,
      title: "Languages",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Languages",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Languages",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Languages",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: "Languages",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Languages",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Languages",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Languages",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],

  Accounting: [
    {
      id: 1,
      img: reactLogo,
      title: " Accounting",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: " Accounting",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: " Accounting",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: " Accounting",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: " Accounting",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: " Accounting",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: " Accounting",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: " Accounting",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],

  "Human Resource": [
    {
      id: 1,
      img: reactLogo,
      title: "Human Resource",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Human Resource",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Human Resource",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Human Resource",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: "Human Resource",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Human Resource",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Human Resource",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Human Resource",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],

  Marketing: [
    {
      id: 1,
      img: reactLogo,
      title: "Marketing",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Marketing",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Marketing",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Marketing",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
    {
      id: 1,
      img: reactLogo,
      title: "Marketing",
      level: "Beginner",
      rating: "4.8",
      reviews: "(6)",
      tags: ["React", "JS"],
    },
    {
      id: 2,
      img: reactLogo,
      title: "Marketing",
      level: "Advanced",
      rating: "4.9",
      reviews: "(10)",
      tags: ["Hooks", "Context"],
    },
    {
      id: 3,
      img: reactLogo,
      title: "Marketing",
      level: "Intermediate",
      rating: "4.7",
      reviews: "(8)",
      tags: ["JS", "ES6"],
    },
    {
      id: 4,
      img: reactLogo,
      title: "Marketing",
      level: "Advanced",
      rating: "4.9",
      reviews: "(7)",
      tags: ["Next.js", "SSR"],
    },
  ],
};

export default function CardSection() {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");
  const filteredCourses = courses[activeCategory] || [];

  return (
    <div className="w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto py-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 leading-tight ">
          <span className="block">Your Journey to</span>
          <span className="block">Expertise Starts</span>
          <span className="block">Here</span>
        </h1>
        <div className="text-center">
          <div className="inline-block text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-4">
            <p>Gain real-world skills, learn from experts and</p>
            <p className="text-center">
              advance your career with industry focused courses
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6 border-b border-gray-200 pb-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`relative flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md transition text-sm sm:text-base ${
              activeCategory === cat.name
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            <img src={cat.icon} alt={cat.name} className="w-5 h-5" />
            <span>{cat.name}</span>
            {activeCategory === cat.name && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center border border-transparent hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition"
          >
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-3">
              <img src={course.img} alt={course.title} className="w-10 h-10" />
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              <Star size={16} fill="currentColor" />
              <span className="text-black ml-1">{course.rating}</span>
              <span className="text-gray-500 text-sm ml-1">
                {course.reviews}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-center">
              {course.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{course.level}</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {course.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border rounded-full px-3 py-1 text-gray-700 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    <div className="flex justify-center">
  <Link to="/courses">
    <button className="flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold border border-blue-500 rounded-full hover:bg-blue-50 transition">
      View All
      <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <ArrowUpRight className="text-white" size={18} />
      </span>
    </button>
  </Link>
</div>
    </div>
  );
}
