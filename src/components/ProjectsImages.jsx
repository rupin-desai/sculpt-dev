import React from "react";
import { motion } from "framer-motion";

const ProjectsImages = ({ images }) => {
  const imageClasses = `w-full object-cover transition-transform duration-300 
    hover:scale-110 group-hover:hover:scale-110 hover:shadow-2xl group-hover:shadow-none rounded-md 
    group-hover:z-10 `;

  const columnsClass = `columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 group`;

  return (
    <div className="mt-10 px-10 sm:px-6 md:px-12 lg:px-20 lg:max-h-550 overflow-hidden">
      <div className={columnsClass}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid relative"
            initial={{
              opacity: 0,
              transform: index % 2 === 0 ? "translateX(-100px)" : "translateX(100px)", // Changed x to translateX
            }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0)", // Using translateX for smoother animation
            }}
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
