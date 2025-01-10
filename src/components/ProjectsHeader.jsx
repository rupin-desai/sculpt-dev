import React from "react";
import { motion } from "framer-motion";

const ProjectsHeader = ({ headerText }) => {
  return (
    <section className="flex flex-col sm:flex-row justify-center sm:justify-start bg-white pt-16 pb-5 px-6 sm:px-8 md:px-12 lg:px-20">
      
      <motion.div
        className="flex p-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-custom text-center sm:text-left leading-snug"
        initial={{ x: "100%", opacity: 0 }} // Start from the right with 0 opacity
        whileInView={{ x: 0, opacity: 1 }} // Slide to the center and fade in
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
      >
        {headerText}
      </motion.div>

      <div className="flex justify-center sm:justify-start text-center sm:text-left align-middle px-5 sm:px-8 mt-5 w-full md:w-auto">
        <motion.hr
          className="flex border-t-4 border-green-900 rounded-l-full rounded-r-full"
          initial={{ width: 0 }}
          whileInView={{ width: "20rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
        />
      </div>
    </section>
  );
};

export default ProjectsHeader;
