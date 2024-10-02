import React from "react";
import "./Herosection.css";

function Herosection() {
  return (
    <div className="hero-section">
      <h1 className="highlighted-heading">
        <span className="white-text">INDIA’S FIRST</span>
        <br />
        <span className="white-text">SMART </span>
        <span className="highlighted-text">News FIN-APP</span>
      </h1>

      <p className="hero-description">“Where Intelligence Meets Finance”</p>
      <button className="hero-button">www.FinNews.in</button>

      <div className="scroll-down">
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Herosection;
