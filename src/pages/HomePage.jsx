import React from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const headerText = <span>Recent Projects</span>;
const images = [
  "/sculpt-dev/projects-1.png",
  "/sculpt-dev/projects-9.png",
  "/sculpt-dev/projects-2.png",
  "/sculpt-dev/projects-3.png",
  "/sculpt-dev/projects-8.png",
  "/sculpt-dev/projects-4.png",
  "/sculpt-dev/projects-7.png",
  "/sculpt-dev/projects-5.png",
  "/sculpt-dev/projects-6.png",
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects headerText={headerText} images={images} />
      <Contact />
    </>
  );
};

export default HomePage;
