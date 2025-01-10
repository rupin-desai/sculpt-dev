import React from "react";
import hero from "../assets/hero.png";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";
import HeroBg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="bg-white h-screen flex items-center justify-center relative flex-col sm:flex-row"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="w-full sm:w-7/12 text-center sm:text-left px-4 sm:px-16 flex flex-col justify-center h-full">
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
      <div className="w-full sm:w-5/12 h-full bg-cover bg-center flex justify-center sm:justify-start mt-8 sm:mt-0">
        <img
          src={hero}
          alt="ArchDesign Logo"
          className="h-full w-full object-cover sm:w-auto sm:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
