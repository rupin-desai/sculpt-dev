import React from "react";
import { motion } from "framer-motion";

const AboutHeader = ({ headerText }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-center bg-white py-8 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex justify-center text-center my-auto w-full">
        <motion.hr
          className="flex border-t-4 mt-5 border-green-900 rounded-l-full sm:mt-5 rounded-r-full mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "20rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
        />
      </div>
      <motion.div
        className="flex p-0 text-lg text-gray-custom mt-4 lg:mt-0 w-full"
        initial={{ x: "100%", opacity: 0 }} // Start from the right with 0 opacity
        whileInView={{ x: 0, opacity: 1 }} // Slide to the center and fade in
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
      >
        <div className="text-center sm:text-left text-sm sm:text-2xl md:text-lg lg:text-xl  text-black">
          {headerText}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHeader;
