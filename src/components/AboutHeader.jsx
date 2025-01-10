import React from "react";
import { motion } from "framer-motion";

const AboutHeader = ({ headerText }) => {
  return (
    <section className="flex justify-end bg-white py-16 pl-48 pr-20">
      <div className="flex justify-center text-center align-middle px-10 my-auto">
        <motion.hr
          className="flex border-t-4 border-green-900 rounded-l-full rounded-r-full"
          initial={{ width: 0 }}
          whileInView={{ width: "20rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
        />
      </div>
      <motion.div
        className="flex p-0 text-lg text-gray-custom"
        initial={{ x: "100%", opacity: 0 }} // Start from the right with 0 opacity
        whileInView={{ x: 0, opacity: 1 }} // Slide to the center and fade in
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
      >
        {headerText}
      </motion.div>
    </section>
  );
};

export default AboutHeader;
