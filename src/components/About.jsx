import React from "react";


import AboutHeader from "./AboutHeader";
import AboutDetails from "./AboutDetails";



const headerText = (
  <span>
    Sculpt Designs is a dynamic architectural and design firm based in India,
    founded by Ar. Chinmay Rajeshirke, an architect with a global perspective.
    Our expertise spans architecture, interior design, and landscape
    architecture, allowing us to offer comprehensive solutions for residential
    and commercial projects.
  </span>
);
const AboutText = (
  <span>
    At <strong>Sculpt Designs</strong>, we specialize in crafting medium-sized
    homes that seamlessly merge innovation, sustainability, and functionality.
    Our minimalist approach ensures enduring designs, while our commitment to
    locally sourced materials honors the environment. What sets us apart is our
    expansive global collaboration network, bringing together architects,
    interior designers, and landscape architects from around the world.
  </span>
);

const About = () => {
  return (
    <>
      <AboutHeader headerText={headerText} />
      <AboutDetails AboutText={AboutText} />
    </>
  );
};

export default About;
