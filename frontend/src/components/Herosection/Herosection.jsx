import React from "react";
import { motion } from "framer-motion";
import "./Herosection.css";
import homepagephoto from "../../assets/financeimage.jpeg";

function Herosection() {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0.3 }} // Background starts invisible
      animate={{ opacity: 1 }} // Background fades in
      transition={{ duration: 2 }} // Duration of background animation
    >
      <div className="hero-content">
        <div className="text-section">
          <motion.h1
            className="highlighted-heading"
            initial={{ y: 100, opacity: 0 }} // Text starts off-screen (bottom)
            animate={{ y: 0, opacity: 1 }} // Text moves to original position
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }} // Spring effect for smooth animation
          >
            <span className="white-text">INDIA’S FIRST</span>
            <br />
            <span className="white-text">SMART </span>
            <span className="highlighted-text">News FIN-APP</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ y: 100, opacity: 0 }} // Text starts off-screen
            animate={{ y: 0, opacity: 1 }} // Text slides up and fades in
            transition={{ type: "spring", stiffness: 50, delay: 0.7 }} // Slight delay for the description
          >
            Where Intelligence Meets Finance
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ y: 70, opacity: 0 }} // Button starts off-screen
            animate={{ y: 0, opacity: 1 }} // Button slides up and fades in
            transition={{ type: "spring", stiffness: 50, delay: 0.8 }} // Delay the button animation
          >
            www.FinNews.in
          </motion.button>
        </div>

        <motion.div
          className="image-section"
          initial={{ opacity: 0 }} // Image starts invisible
          animate={{ opacity: 1 }} // Image fades in
          transition={{ duration: 1.5, delay: 1 }} // Delay for smooth fade-in
        >
          <img
            src={homepagephoto}
            alt="Smart Finance News App"
            className="hero-image"
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }} // Scroll hint starts invisible
        animate={{ opacity: 1 }} // Scroll hint fades in
        transition={{ duration: 1.5, delay: 1.2 }} // Delay and slow fade-in for the scroll hint
      >
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </motion.div>
    </motion.div>
  );
}

export default Herosection;
