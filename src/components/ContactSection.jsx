import React from "react";
import contactBg from "../assets/contact-bg.png";
import { motion } from "framer-motion";

const ContactSection = ({ heading, description, buttonText }) => {
  return (
    <section className="py-12 sm:py-32 px-4 sm:px-16 flex justify-center text-center">
      <motion.div
        className="p-6 sm:p-16 lg:p-20 rounded-xl flex flex-col justify-center text-white relative"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* Black overlay */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-xl"
          style={{ zIndex: 1 }}
        ></div>

        {/* Content */}
        <div
          className="text-xl sm:text-2xl md:text-3xl mx-auto z-10 py-5 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          {heading}
        </div>
        <div
          className="text-sm sm:text-base md:text-lg z-10 font-thin pb-10 sm:pb-16 w-full sm:w-11/12 lg:w-2/3 mx-auto"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          {description}
        </div>

        <div className="m-2 py-3 px-6 sm:px-8 md:px-10 bg-orange-600 rounded-xl flex text-base sm:text-lg md:text-xl mx-auto z-10 hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
          {buttonText}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
