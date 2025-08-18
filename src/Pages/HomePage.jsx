import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import CardSection from "../Components/CardSection";
import WhyEduOne from "../Components/WhyEduOne";
import ProfileSection from "../Components/ProfileSection";
import Search from "../Components/Search";
import AboutUs from "../Components/AboutUs";
import Slider from "../Components/Slider";
import HowItWorks from "../Components/HowItWorks";
import Questions from "../Components/Questions";
import Footer from "../Components/Footer";
import Email from "../Components/Email";

import bgImage from "../assets/bgimage.png";

function HomePage() {
  return (
    <div>
      <div
        className="relative min-h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <Search />
      <CardSection />
      <WhyEduOne />
      <ProfileSection />
      <HowItWorks />
      <Slider />
      <AboutUs />
      <Questions />
      <Email />
      <Footer />
    </div>
  );
}

export default HomePage;
