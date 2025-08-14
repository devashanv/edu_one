import React, { useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import CategoryIcon from "../assets/c1.svg";
import reactLogo from "../assets/react.svg";

const categories = [
  "Developing",
  "UI/UX Design",
  "Management",
  "Languages",
  "Accounting",
  "Human Resource",
  "Marketing"
];

const courses = {
  Developing: [
    { id: 1, img: reactLogo, title: "React Basics", level: "Beginner", rating: "4.8", reviews: "(6)", tags: ["React", "JS"] },
    { id: 2, img: reactLogo, title: "Advanced React", level: "Advanced", rating: "4.9", reviews: "(10)", tags: ["Hooks", "Context"] },
    { id: 3, img: reactLogo, title: "JavaScript Mastery", level: "Intermediate", rating: "4.7", reviews: "(8)", tags: ["JS", "ES6"] },
    { id: 4, img: reactLogo, title: "Next.js Pro", level: "Advanced", rating: "4.9", reviews: "(7)", tags: ["Next.js", "SSR"] },
    { id: 5, img: reactLogo, title: "Frontend Basics", level: "Beginner", rating: "4.6", reviews: "(5)", tags: ["HTML", "CSS"] },
    { id: 6, img: reactLogo, title: "TypeScript Crash", level: "Intermediate", rating: "4.8", reviews: "(6)", tags: ["TS", "React"] },
    { id: 7, img: reactLogo, title: "Node.js API", level: "Intermediate", rating: "4.8", reviews: "(6)", tags: ["Node", "API"] },
    { id: 8, img: reactLogo, title: "Fullstack Pro", level: "Advanced", rating: "5.0", reviews: "(12)", tags: ["React", "Node"] }
  ],
 UIUXDesign: [
    { id: 1, img: reactLogo, title: "UI/UX Basics", level: "Beginner", rating: "4.8", reviews: "(6)", tags: ["Figma", "Spline"] },
    { id: 2, img: reactLogo, title: "UI/UX Beginner", level: "Advanced", rating: "4.8", reviews: "(6)", tags: ["Adobe XD", "Framer"] },
    { id: 3, img: reactLogo, title: "UI/UX Intermediate", level: "Intermediate", rating: "4.7", reviews: "(6)", tags: ["Figma", "Sketch"] },
    { id: 4, img: reactLogo, title: "UI/UX Pro", level: "Advanced", rating: "4.9", reviews: "(9)", tags: ["Figma", "Prototyping"] },
    { id: 5, img: reactLogo, title: "Design Expert", level: "Advanced", rating: "4.9", reviews: "(8)", tags: ["Sketch", "Illustrator"] },
    { id: 6, img: reactLogo, title: "Framer Magic", level: "Beginner", rating: "4.8", reviews: "(7)", tags: ["Framer", "Animation"] },
    { id: 7, img: reactLogo, title: "Adobe Master", level: "Pro", rating: "5.0", reviews: "(10)", tags: ["Photoshop", "Illustrator"] },
    { id: 8, img: reactLogo, title: "Spline 3D", level: "Intermediate", rating: "4.8", reviews: "(6)", tags: ["3D", "Spline"] }
  ],
  Management: [
    { id: 1, img: reactLogo, title: "Business Basics", level: "Beginner", rating: "4.8", reviews: "(6)", tags: ["Business", "Strategy"] },
    { id: 2, img: reactLogo, title: "Project Management", level: "Intermediate", rating: "4.9", reviews: "(10)", tags: ["Agile", "Scrum"] },
    { id: 3, img: reactLogo, title: "Leadership Skills", level: "Advanced", rating: "4.8", reviews: "(8)", tags: ["Leadership", "Team"] },
    { id: 4, img: reactLogo, title: "Strategic Planning", level: "Advanced", rating: "4.9", reviews: "(7)", tags: ["Strategy", "Planning"] },
    { id: 5, img: reactLogo, title: "Operations Basics", level: "Beginner", rating: "4.6", reviews: "(5)", tags: ["Operations", "Efficiency"] },
    { id: 6, img: reactLogo, title: "Advanced Operations", level: "Advanced", rating: "4.8", reviews: "(6)", tags: ["Ops", "Management"] },
    { id: 7, img: reactLogo, title: "Business Growth", level: "Intermediate", rating: "4.8", reviews: "(6)", tags: ["Growth", "Strategy"] },
    { id: 8, img: reactLogo, title: "HR Management", level: "Intermediate", rating: "5.0", reviews: "(12)", tags: ["HR", "Policy"] }
  ]
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
            <p className="text-center">advance your career with industry focused courses</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6 border-b border-gray-200 pb-3">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md transition text-sm sm:text-base ${
              activeCategory === cat ? "text-blue-600 font-semibold" : "text-gray-700"
            }`}
          >
            <img src={CategoryIcon} alt="" className="w-5 h-5" />
            <span>{cat}</span>
            {activeCategory === cat && (
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
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <img src={course.img} alt={course.title} className="w-10 h-10" />
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              <Star size={16} fill="currentColor" />
              <span className="text-black ml-1">{course.rating}</span>
              <span className="text-gray-500 text-sm ml-1">{course.reviews}</span>
            </div>
            <h3 className="font-semibold text-lg text-center">{course.title}</h3>
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
        <button className="flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold border border-blue-500 rounded-full hover:bg-blue-50 transition">
          View All
          <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <ArrowUpRight className="text-white" size={18} />
          </span>
        </button>
      </div>
    </div>
  );
}
