import React from "react";
import img1 from "../assets/image5.jpg"; 

const images = [
  img1, img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1, img1
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 leading-tight ">
           <span className="block">Enlightened the Futures</span>
          <span className="block">of thousands</span>
        
        </h2>
         <div className="inline-block text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            <p>EduOne has empowered countless students and professionals shaping their success </p>
            <p className="text-center">
             and career paths
            </p>
          </div>
      </div>

      
      <div className="relative overflow-hidden h-[450px]">
      
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

     
        <div className="absolute inset-0 animate-scroll-up flex flex-col items-center gap-6">
          {[...rows, ...rows].map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-6">
              {row.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
