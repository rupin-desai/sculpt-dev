import React from "react";
import { motion } from "framer-motion";

const ProjectsImages = ({
  images,
  smColumns = 2,
  mdColumns = 3,
  lgColumns = 4,
  xlColumns = 5,
  maxHeight = "600px", // default max-height for the container
  overflow = "hidden", // default overflow for the container
  imageMaxHeight = "480px", // default max-height for the images
}) => {
  const imageClasses = `w-full object-cover max-h-[${imageMaxHeight}] transition-transform duration-300 
    hover:scale-110 group-hover:hover:scale-110 hover:shadow-2xl group-hover:shadow-none rounded-md 
    group-hover:z-10 transition-all duration-300 ease-in-out`;

  // Dynamically generate the columns classes based on the breakpoints props
  const columnsClass = `columns-1 sm:columns-${smColumns} md:columns-${mdColumns} lg:columns-${lgColumns} xl:columns-${xlColumns} gap-4 group`;

  return (
    <div
      className={`mt-10`}
      style={{
        maxHeight: maxHeight,
        overflow: overflow,
      }}
    >
      <div className={columnsClass}>
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
