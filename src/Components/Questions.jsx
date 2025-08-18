import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQSection = () => {
  const questions = [
    {
      id: 1,
      question: "What is EduOne's Online Learning Platform?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
    {
      id: 2,
      question: "How do I start learning web development in EduOne?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
    {
      id: 3,
      question: "How do I start learning web development in EduOne?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
    {
      id: 4,
      question: "How do I start learning web development in EduOne?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
    {
      id: 5,
      question: "How do I start learning web development in EduOne?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
    {
      id: 6,
      question: "How do I start learning web development in EduOne?",
      answer:
        "Yes, eduOne's courses are designed with real-world skills in min, helping you build a strong foundation and advance in your career. Our job oriented curriculum is crafted by industry experts to ensure you gain the practical knowledge employers are looking for.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 text-left">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {questions.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl p-5 border shadow-md transition-all duration-300 ${
              openId === item.id
                ? "bg-gradient-to-r from-sky-100 via-white-500 to-sky-100 text-black"
                : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl bg">{item.question}</h3>
              <button
                onClick={() => toggleCard(item.id)}
                className="p-2 text-blue-700"
              >
                {openId === item.id ? <X size={20} /> : <Plus size={20} />}
              </button>
            </div>
            {openId === item.id && (
              <p className="mt-4 text-gray-600 text-lg">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
