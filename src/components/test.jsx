import React from "react";
import { motion } from "framer-motion";

const ProjectsImages = ({ images }) => {
  return (
    <div className="max-h-[600px] overflow-hidden mt-10">
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid group" // Added group for hover control
            initial={{ x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full object-cover max-h-[480px] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsImages;

