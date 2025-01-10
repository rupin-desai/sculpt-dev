import React from "react";
import contactBg from "../assets/contact-bg.png";
import { motion } from "framer-motion";

const ContactSection = ({ heading, description, buttonText }) => {
  return (
    <section className="py-32 px-20 flex justify-center text-center">
      <motion.div
        className="p-20 rounded-xl flex flex-col justify-center text-white text-center relative "
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ y: 100, opacity: 0 }} // Initial position and opacity
        whileInView={{ y: 0, opacity: 1 }} // Final position and opacity when in view
        transition={{ duration: 0.8, ease: "easeInOut" }} // Transition settings
        viewport={{ once: true }} // Trigger animation only once
      >
        {/* Black overlay */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-xl"
          style={{
            zIndex: 1, // Ensure overlay sits above the background image
          }}
        ></div>

        {/* Content goes here, and it will be above the overlay */}
        <div
          className="flex text-2xl mx-auto z-10 py-5"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          {heading}
        </div>
        <div
          className="flex text-lg z-10 font-thin pb-16 w-2/3 mx-auto"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          {description}
        </div>

        <div className="m-2 py-3 px-4 bg-orange-600 rounded-xl flex text-lg mx-auto z-10 hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
          {buttonText}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
