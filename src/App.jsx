import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import CardSection from "./Components/CardSection";
import WhyEduOne from "./Components/WhyEduOne";
import ProfileSection from "./Components/ProfileSection";

function App() {
  return (
    <div>
      <div className="relative min-h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 60%, white 100%),
              linear-gradient(to right, #7dd3fc 10%, white 30%, white 70%, #7dd3fc 100%)
            `,
            backgroundBlendMode: 'multiply',
          }}
        />
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <Search />
      <CardSection/>
      <WhyEduOne/>
      <ProfileSection/>
      <Footer/>

    </div>
  );
}

export default App;