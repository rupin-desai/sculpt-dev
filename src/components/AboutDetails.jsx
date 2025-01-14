import React from "react";
import AboutLeft from "../assets/about-left.png"; // Import the AboutLeft image
import AboutDetailsCardBG from "../assets/AboutDetailsCard-Bg.png";
import { motion } from "framer-motion";

import AboutDetailsCard from "./AboutDetailsCard";

const AboutDetails = ({ AboutText }) => {
  return (
    <section className="flex flex-col lg:flex-row bg-white py-8 justify-center text-black">
      {/* Left Image Section */}
      <motion.div
        className="flex w-full lg:w-1/2 justify-center lg:justify-end text-center px-6 lg:pr-20 mb-8 lg:mb-0"
        initial={{ transform: "translateY(50%)" }} // Using translateY
        whileInView={{ transform: "translateY(0)" }}
        transition={{ duration: 1 }}
        viewport={{
          amount: 0.25,
          once: true,
        }}
      >
        <img src={AboutLeft} alt="About Left" className="w-full max-w-sm lg:max-w-md" />
      </motion.div>

      {/* Text and Details Section */}
      <div className="flex flex-col w-full lg:w-2/5 text-left px-6 lg:px-14 my-auto">
        {/* Title */}
        <motion.div
          className="text-2xl font-bold py-2"
          initial={{ opacity: 0, transform: "translateX(100px)" }} // Changed x to translateX
          whileInView={{ opacity: 1, transform: "translateX(0)" }} // Using translateX
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-sm text-gray-700 pb-5 leading-relaxed"
          initial={{ opacity: 0, transform: "translateX(100px)" }} // Changed x to translateX
          whileInView={{ opacity: 1, transform: "translateX(0)" }} // Using translateX
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {AboutText}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="flex flex-col w-full bg-green-900 rounded-md p-4 py-6"
          style={{
            backgroundImage: `url(${AboutDetailsCardBG})`,
            backgroundPosition: "bottom right",
            backgroundSize: "40%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, transform: "translateX(100px)" }} // Changed x to translateX
          whileInView={{ opacity: 1, transform: "translateX(0)" }} // Using translateX
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Card Title */}
          <div className="text-lg font-semibold text-white mb-4 pl-2">Why Choose Us</div>

          {/* Details Cards */}
          <AboutDetailsCard
            title="Over 100 Satisfied Clients"
            description="Our track record speaks for itself - with years of experience under our belt, we have had the pleasure of serving over 100 clients and counting."
          />
          <AboutDetailsCard
            title="Certified and Trusted"
            description="As a certified and trusted architecture agency, we provide exceptional services and have a reputation for delivering high-quality results."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetails;
