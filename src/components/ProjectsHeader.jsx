import React from "react";
import { motion } from "framer-motion";

const ProjectsHeader = ({ headerText }) => {
  return (
    <section className="flex flex-col sm:flex-row justify-center sm:justify-start bg-white pt-16 pb-5 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header Text */}
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-custom text-center sm:text-left font-semibold leading-snug"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {headerText}
      </motion.div>

      {/* Divider Line */}
      <div className="flex justify-center sm:justify-start mt-5 w-full md:w-auto">
        <motion.hr
          className="border-t-4 border-green-900 rounded-full w-full sm:w-[20rem]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default ProjectsHeader;
