import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon
import hero from "../assets/hero.png";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-between relative flex-row ">
    {/* Left Section */}
    <div className="w-full md:w-7/12 text-center md:text-left pl-6 md:pl-32 flex flex-col justify-between h-full">
      <HeroTitle
        title="Architectural Solutions for Every Vision"
        subtitle="Explore the symbiotic relationship between architecture and the environment"
      />
  
      {/* Bottom Text with Overlap */}
      <HeroStats
        clients={14}
        projectsCompleted={21}
        awardsWon={6}
        ideaText="Make it!"
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
