import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroTitle = ({ title, subtitle }) => {
  return (
    <div className="w-full text-left pt-0 sm:px-0 md:pd-0 ">
      {/* Main Title with Fade-in Effect */}
      <motion.h1
        className="flex items-start w-full pt-10 text-2xl font-medium text-black sm:text-3xl md:text-5xl lg:text-7xl xl:pt-32 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Animation happens only once
      >
        {title}
      </motion.h1>

      {/* Subsection with Icon and Text with Staggered Animations */}
      <motion.div
        className="flex justify-start items-center pt-6 sm:pt-12 lg:pt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }} // Ensures the animation only happens once when the element comes into view
      >
        {/* Arrow Icon with Animation from the Left */}
        <motion.div
          className="bg-gray-800 text-white p-4 rounded-full cursor-pointer"
          initial={{ x: -50, opacity: 0 }} // Starts offscreen to the left
          whileInView={{ x: 0, opacity: 1 }} // Moves to the normal position
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Arrow comes into view only once
        >
          <FaArrowRight size={30} />
        </motion.div>

        {/* Subtitle with Staggered Animation and Coming from the Left */}
        <motion.div
          className="flex w-full sm:w-7/12 items-start text-lg sm:text-xl text-gray-600 pl-6"
          initial={{ x: -50, opacity: 0 }} // Starts offscreen to the left
          whileInView={{ x: 0, opacity: 1 }} // Moves to the normal position
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Subtitle comes into view only once
        >
          {subtitle}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroTitle;
