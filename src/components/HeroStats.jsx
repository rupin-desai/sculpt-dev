import React from "react";
import { motion } from "framer-motion";

const HeroStats = ({ clients, projectsCompleted, awardsWon, ideaText }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white text-bl text-lg py-10 w-[calc(100%-20vw)] transform">
      <motion.div
        className="flex justify-between text-center px-20"
        initial={{ y: "100%", opacity: 0 }}  // Starts from below
        whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
        transition={{ duration: 1 }}  // Controls the speed of the animation
        viewport={{ once: true }}  // Animation happens only once
      >
        <motion.div
          className="text-3xl font-bold"
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.2 }}  // Delay of 0.2s for the first item
        >
          {clients}
          <p className="text-sm font-light">Clients</p>
        </motion.div>

        <motion.div
          className="text-3xl font-bold"
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.3 }}  // Delay of 0.4s for the second item
        >
          {projectsCompleted}
          <p className="text-sm font-light">Projects Completed</p>
        </motion.div>

        <motion.div
          className="text-3xl font-bold"
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.4 }}  // Delay of 0.6s for the third item
        >
          {awardsWon}
          <p className="text-sm font-light">Awards Won</p>
        </motion.div>

        <motion.div
          className="text-3xl font-bold"
          initial={{ y: "100%", opacity: 0 }}  // Starts from below
          whileInView={{ y: 0, opacity: 1 }}  // Moves up to its normal position
          transition={{ duration: 0.3, delay: 0.5 }}  // Delay of 0.8s for the fourth item
        >
          Got an idea?
          <p className="flex text-left text-sm font-bold text-green-900 underline underline-offset-2 decoration-thick-2">
            {ideaText}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroStats;
