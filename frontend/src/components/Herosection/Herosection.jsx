import React from "react";
import { motion } from "framer-motion";
import "./Herosection.css";
import homepagephoto from "../../assets/financeimage.jpeg";

function Herosection() {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="hero-content">
        <motion.div
          className="image-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img
            src={homepagephoto}
            alt="Smart Finance News App"
            className="hero-image"
          />
        </motion.div>

        <div className="text-section">
          <motion.h1
            className="highlighted-heading"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          >
            <span className="white-text">INDIA’S FIRST</span>
            <br />
            <span className="white-text">SMART </span>
            <span className="highlighted-text">News FIN-APP</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
          >
            Where Intelligence Meets Finance
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
          >
            www.FinNews.in
          </motion.button>
        </div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </motion.div>
    </motion.div>
  );
}

export default Herosection;
