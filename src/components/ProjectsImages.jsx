import React from "react";
import { motion } from "framer-motion";

const ProjectsImages = ({ images }) => {
  const imageClasses = `w-full object-cover max-h-[480px] transition-transform duration-300 
    hover:scale-110 group-hover:hover:scale-110 hover:shadow-2xl group-hover:shadow-none rounded-md 
    group-hover:z-10 transition-all duration-300 ease-in-out`;

  const columnsClass = `columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 group`;

  return (
    <div
      className="mt-10 overflow-hidden max-h-full p-10 lg:max-h-600 lg:p-0"
     
    >
      <div
        className={`${columnsClass} md:max-h-full sm:max-h-full max-h-full `}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid relative transition duration-300"
            initial={{ x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className={imageClasses}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsImages;
