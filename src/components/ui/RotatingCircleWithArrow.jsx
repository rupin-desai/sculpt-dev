import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight as FaArrowRightLight } from "react-icons/fa";

const RotatingCircleWithArrow = ({ scrollCenterToTop, rotateArrow }) => {
  return (
    <motion.div
      className="relative  h-16 bg-white border-2 border-green-900/0 rounded-full flex justify-center items-center"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* First Circle Overlapping the Second Circle */}
      <motion.div
        className="absolute w-16 h-16 bg-white border-2 border-green-900 rounded-full flex justify-center items-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="relative w-16 h-16 bg-green-900 rounded-full flex justify-center items-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ left: "30%" }} // Adjust this value to control the overlap
      >
        {/* Rotating Circle */}
        <motion.div
          className="absolute w-14 h-14 border-2 border-white rounded-full"
          style={{
            rotate: scrollCenterToTop,
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 40%, 70% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 0%)", // Create a custom cut in the circle's border
            //clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 60%, 70% 50%, 100% 40%, 100% 0%, 0% 0%)",
          }}
        />

        {/* Rotating Arrow */}
        <motion.div
          className="text-6xl text-white font-bold"
          style={{ rotate: rotateArrow }} // Apply dynamic rotation to the arrow
        >
          <FaArrowRightLight size={30} style={{ strokeWidth: 4, stroke: "currentColor" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RotatingCircleWithArrow;
