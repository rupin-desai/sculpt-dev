import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight as FaArrowRightLight } from "react-icons/fa";

const RotatingCircleWithArrow = ({ scrollCenterToTop, rotateArrow }) => {
  return (
    <motion.div
      className="relative h-16 bg-white border-2 border-green-900/0 rounded-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity'}} // Optimized rendering
    >
      {/* Outer Circle with Overlapping Inner Circles */}
      <motion.div
        className="absolute w-16 h-16 bg-white border-2 border-green-900 rounded-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }} // Optimized rendering
      />

      <motion.div
        className="relative w-16 h-16 bg-green-900 rounded-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          willChange: "transform, opacity", // Optimized rendering
          transform: "translateX(30%)", // Using transform for better performance
        }}
      >
        {/* Rotating Inner Circle */}
        <motion.div
          className="absolute w-14 h-14 border-2 border-white rounded-full"
          style={{
            rotate: scrollCenterToTop,
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 40%, 70% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 0%)",
            willChange: "transform", // Performance improvement
          }}
        />

        {/* Rotating Arrow */}
        <motion.div
          className="text-6xl text-white font-bold"
          style={{
            rotate: rotateArrow,
            willChange: "transform", // Performance improvement
          }}
        >
          <FaArrowRightLight size={30} style={{ strokeWidth: 4, stroke: "currentColor" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RotatingCircleWithArrow;
