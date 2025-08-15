import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import CardSection from '../Components/CardSection'
import WhyEduOne from '../Components/WhyEduOne'
import ProfileSection from '../Components/ProfileSection'
import Search from '../Components/Search'
import AboutUs from '../Components/AboutUs'
import Slider from '../Components/Slider'
import HowItWorks from '../Components/HowItWorks'
import Questions from '../Components/Questions'
import Footer from '../Components/Footer'
import Email from '../Components/Email'

function HomePage() {
  return (
   <div>
        <div className="relative min-h-[50vh] overflow-hidden">
          <div   
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 60%, white 100%),
                linear-gradient(to right, #7dd3fc 10%, white 50%, #7dd3fc 100%)
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
        <HowItWorks/>
        <AboutUs/>
        <Slider/>
        <Questions/>
        <Email/>
        <Footer/>
    </div>
  )
}

export default HomePage