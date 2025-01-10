import React from "react";

const headerText =
  "Sculpt Designs is a dynamic architectural and design firm based in India, founded by Ar. Chinmay Rajeshirke, an architect with a global perspective. Our expertise spans architecture, interior design, and landscape architecture, allowing us to offer comprehensive solutions for residential and commercial projects.";
const About = () => {
  return (
    <section className="flex justify-end  bg-white py-16 pl-48 pr-20">
    <div className="flex justify-center text-center align-middle px-10 my-auto">
    <hr className="flex border-t-4 border-green-900 w-60 rounded-l-full rounded-r-full" />

    </div>
    <div className="flex p-0 text-lg  text-gray-custom"> 
    {headerText}
      
    </div>
  </section>
  );
};

export default About;
