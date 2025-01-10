import React from "react";
import { motion } from "framer-motion";

const statClasses = "flex justify-left text-left flex-col w-full md:w-1/4 text-xs sm:text-sm md:text-xl lg:text-2xl  font-bold";
const statSubClasses = "text-xs sm:text-sm md:text-md lg:text-lg font-light text-gray-500"
const HeroStats = ({ clients, projectsCompleted, awardsWon, ideaText }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white text-bl text-lg py-5 lg:py-6 sm:w-[calc(100%-15vw)] transform ">
      <motion.div
        className="flex  justify-between text-center px-4 md:px-20"
        initial={{ y: "100%", opacity: 0 }}  // Starts from below
        whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
        transition={{ duration: 1 }}  // Controls the speed of the animation
        viewport={{ once: true }}  // Animation happens only once
      >
        {/* Client Stats */}
        <motion.div
          className={statClasses}
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.2 }}  // Delay of 0.2s for the first item
          viewport={{ once: true }} 
        >
          {clients}
          <p className={statSubClasses}>Clients</p>
        </motion.div>

        {/* Projects Completed Stats */}
        <motion.div
          className={statClasses}
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.3 }}  // Delay of 0.4s for the second item
          viewport={{ once: true }} 
        >
          {projectsCompleted}
          <p className={statSubClasses}>Projects</p>
        </motion.div>

        {/* Awards Won Stats */}
        <motion.div
          className={statClasses}
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.4 }}  // Delay of 0.6s for the third item
          viewport={{ once: true }} 
        >
          {awardsWon}
          <p className={statSubClasses}>Awards</p>
        </motion.div>

        {/* Idea Section */}
        <motion.div
          className={statClasses}
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.5 }}  // Delay of 0.8s for the fourth item
          viewport={{ once: true }} 
        >
          Got an idea?
          <p className="flex  justify-left text-left text-xs sm:text-sm md:text-xl lg:text-lg font-bold text-green-900 underline underline-offset-2 decoration-thick-2">
            {ideaText}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroStats;
