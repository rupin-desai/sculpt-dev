import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingCircleWithArrow from "./ui/RotatingCircleWithArrow";

const HeroTitle = ({ title, subtitle }) => {
  const { scrollYProgress } = useScroll(); // Hook to track scroll progress
  const scrollCenterToTop = useTransform(scrollYProgress, [1, 0], [0, 1080]); // Scroll from center to top
  const rotateArrow = useTransform(scrollYProgress, [1, 0], [0, 1080]); // Arrow rotation from center to top

  return (
    <div className="w-full text-left pt-0 sm:px-6 md:px-8 lg:px-16">
      {/* Main Title with Fade-in Effect */}
      <motion.h1
        className="flex lg:leading-snug lg:tracking-tighter items-start w-full pt-10 text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl xl:pt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>

      {/* Subsection with Circle and Subtitle */}
      <motion.div
        className="flex justify-start items-center pt-6 sm:pt-12 lg:pt-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }} // Ensures the animation only happens once when the element comes into view
      >
        <RotatingCircleWithArrow
          scrollCenterToTop={scrollCenterToTop}
          rotateArrow={rotateArrow}
        />

        {/* Subtitle with Staggered Animation and Coming from the Left */}
        <motion.div
          className="flex lg:leading-snug lg:text-xl leading-10 w-full sm:w-9/12 md:w-8/12 lg:w-7/12 items-start text-lg sm:text-xl text-black pl-6 sm:pl-8 md:pl-10"
          initial={{ x: -50, opacity: 0 }} // Starts offscreen to the left
          whileInView={{ x: 0, opacity: 1 }} // Moves to the normal position
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Subtitle comes into view only once
        >
          {subtitle}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroTitle;
