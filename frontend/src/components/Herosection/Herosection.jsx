import React from "react";
import "./Herosection.css";
// import heroimg from '../../assets/hero-img.png';

function Herosection() {
  return (
    <div className="hero-section">
      <h1 className="highlighted-heading">
        INDIA'S FIRST <br />SMART <span>News FIN-APP</span>
      </h1>
      <p className="hero-description">“Where Intelligence Meets Finance”</p>
      <button className="hero-button">WWW.FinNews.IN</button>
      {/* <img className="heroimg" src={heroimg} alt="" /> */}
      <div className="scroll-down">
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </div>

    </div>
  );
}

export default Herosection;
