import React from "react";
import AboutLeft from "../assets/about-left.png"; // Import the AboutLeft image
import AboutDetailsCardBG from "../assets/AboutDetailsCard-Bg.png";
import { motion } from "framer-motion";

import AboutDetailsCard from "./AboutDetailsCard";

const AboutDetails = ({ AboutText }) => {
  return (
    <section className="flex flex-row bg-white py-0 justify-center text-black">
      <motion.div
        className="flex w-1/2 justify-center text-center pr-20"
        initial={{ y: "50%" }} // Start from 50% below the viewport (adjust as needed)
        whileInView={{ y: 0 }} // Move to its normal position
        transition={{ duration: 1 }} // Animation duration
        viewport={{
          amount: 0.25, // Trigger when 25% of the element is in the viewport
          once: true, // Ensure it animates only once
        }}
      >
        <img src={AboutLeft} alt="About Left" />
      </motion.div>

      <div className="flex flex-col w-2/5 text-left my-auto pr-14 text-black">
        <motion.div
          className="flex text-2xl py-2"
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the left with zero opacity
          whileInView={{ x: 0, opacity: 1 }} // Slide to its normal position and fade in
          transition={{ duration: 1 }} // Animation duration
          viewport={{ once: true }} // Ensure the animation happens only once when the element comes into view
        >
          About Us
        </motion.div>

        <motion.div
          className="flex text-sm pb-5"
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the left with zero opacity
          whileInView={{ x: 0, opacity: 1 }} // Slide to its normal position and fade in
          transition={{ duration: 1,delay: 0.2 }} // Animation duration
          viewport={{ once: true }} // Ensure the animation happens only once when the element comes into view
        >
          {AboutText}
        </motion.div>
        <motion.div
          className="flex flex-col w-11/12 bg-green-900 rounded-md p-2 py-5 pr-10 mr-auto"
          style={{
            backgroundImage: `url(${AboutDetailsCardBG})`, // path to your image
            backgroundPosition: "bottom right", // position at the bottom right corner
            backgroundSize: "50%", // adjust size as needed, 'contain' fits the image within the div
            backgroundRepeat: "no-repeat", // ensures the image doesn't repeat
          }}
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the left with zero opacity
          whileInView={{ x: 0, opacity: 1 }} // Slide to its normal position and fade in
          transition={{ duration: 1,delay:0.3 }} // Animation duration
          viewport={{ once: true }} // Ensure the animation happens only once when the element comes into view
        >
          <div className="flex text-xl pl-3 pb-5 text-white">Why Choose Us</div>

          <AboutDetailsCard
            title="Over 100 Satisfied Clients"
            description="Our track record speaks for itself - with years of experience under our belt, we have had 
            the pleasure of serving over 100 clients and counting."
          />

          <AboutDetailsCard
            title="Certified and trusted"
            description="As a certified and trusted architecture agency, we provide exceptional services and 
            have a reputation for delivering high-quality results"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetails;
