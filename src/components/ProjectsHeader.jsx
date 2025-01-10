import React from "react";
import { motion } from "framer-motion";

const ProjectsHeader = ({ headerText }) => {
  return (
    <section className="flex flex-col  sm:flex-row justify-center sm:justify-start bg-white pt-16 pb-5 px-6 sm:px-8 md:px-12 lg:px-20">
      <motion.div
        className="flex p-0 text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-custom text-center sm:text-left leading-snug"
        initial={{ x: "100%", opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {headerText}
      </motion.div>

      <div className="flex justify-center my-auto  sm:justify-start text-center sm:text-left align-middle px-5 sm:px-8  w-full md:w-auto">
        <motion.hr
          className="flex border-t-4  border-green-900 rounded-l-full rounded-r-full"
          initial={{ width: 0 }}
          whileInView={{ width: "20rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default ProjectsHeader;
