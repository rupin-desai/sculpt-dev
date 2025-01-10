import React from "react";
import hero from "../assets/hero.png";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";
import HeroBg from "../assets/hero-bg.png"

const Hero = () => {
  return (
    <section
      className="bg-white h-screen flex items-center justify-between relative flex-row"
      style={{
        backgroundImage: `url(${HeroBg})`, // Add your vector image path here
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Section */}
      <div className="w-full  md:w-7/12 text-center md:text-left pl-2 md:pl-16 flex flex-col justify-between h-full">
        <HeroTitle
          title="Architectural Solutions for Every Vision"
          subtitle="Explore the symbiotic relationship between architecture and the environment"
        />
  
        {/* Bottom Text with Overlap */}
        <HeroStats
          clients={14}
          projectsCompleted={21}
          awardsWon={6}
          ideaText="Let's Make it!"
        />
      </div>
  
      {/* Right Section - Image */}
      <div className="w-full md:w-5/12 h-full bg-cover bg-center flex justify-center md:justify-start">
        <img
          src={hero}
          alt="ArchDesign Logo"
          className="h-full w-full object-cover md:w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
