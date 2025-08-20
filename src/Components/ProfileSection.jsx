import React from "react";
import img1 from "../assets/image5.jpg";
import img2 from "../assets/image1.jpg";
import img3 from "../assets/image2.jpg";
import img4 from "../assets/image3.jpg";
import img5 from "../assets/image4.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpeg";
import img10 from "../assets/image10.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img9,
  img2,
  img3,
  img4,
  img7,
  img1,
  img6,
  img10,
  img8,
  img5,
  img1,
  img8,
  img3,
  img4,
  img5,
  img7,
  img2,
  img6,
  img4,
  img7,
  img1,
  img2,
  img3,
  img6,
  img5,
  img8,
  img3,
  img2,
  img6,
  img5,
  img10,
];

function ProfileSection() {
  const maxPerRow = 8;
  const rows = [];
  let index = 0;

  for (let count = maxPerRow; count > 0; count--) {
    rows.push(images.slice(index, index + count));
    index += count;
    if (index >= images.length) break;
  }

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 leading-tight">
          <span className="block">Enlightened the Futures</span>
          <span className="block">of thousands</span>
        </h2>
        <div className="inline-block text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          <p>
            EduOne has empowered countless students and professionals shaping
            their success
          </p>
          <p className="text-center">and career paths</p>
        </div>
      </div>

      <div className="relative overflow-hidden h-[320px]">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

        <div className="absolute inset-0 animate-scroll-up flex flex-col items-center gap-8">
          {[...rows, ...rows].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-2 sm:gap-1 md:gap-8"
            >
              {row.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="profile"
                  className="w-16 h-16 sm:w-4 sm:h-4 md:w-20 md:h-20 rounded-full object-cover shadow-md hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up 22s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default ProfileSection;
