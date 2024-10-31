import React from "react";
import "./Herosection.css";
// Uncomment the line below when you have a hero image to use
// import heroimg from '../../assets/hero-img.png';

function Herosection() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the height of the viewport
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="hero-section">
      <h1 className="highlighted-heading">
        <span className="white-text">INDIA’S FIRST</span>
        <br />
        <span className="white-text">SMART </span>
        <span className="highlighted-text">News FIN-APP</span>
      </h1>

      <p className="hero-description">“Where Intelligence Meets Finance”</p>

      <button
        className="hero-button"
        onClick={() => window.open("https://www.finnews.in", "_blank")}
      >
        WWW.FinNews.IN
      </button>

      {/* Uncomment the line below when you have a hero image to use */}
      {/* <img className="heroimg" src={heroimg} alt="Hero" /> */}

      <div className="scroll-down cursor-pointer" onClick={scrollDown}>
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Herosection;
