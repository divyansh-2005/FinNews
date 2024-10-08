import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./GovSchemes.css";  

// List of government schemes
const schemes = [
  {
    title: "Pradhan Mantri Kisan Samman Nidhi",
    description: "Direct income support for farmers to ensure a minimum income.",
    image: "./assets/image/pm-kisan.png",
    link: "#"
  },
  {
    title: "Mahatma Gandhi National Rural Employment",
    description: "Provides 100 days of unskilled wage employment in a financial year.",
    image: "./assets/image/mgnrega.png",
    link: "#"
  },
  {
    title: "Supplemental Nutrition Assistance Program ",
    description: "Food-purchasing assistance for low- and no-income families.",
    image: "./assets/image/snap.png",
    link: "#"
    
  },
  {
    title: "Ayushman Bharat                          ",
    description: "Health insurance scheme for economically vulnerable families.",
    image: "./assets/image/ayushman-bharat.png",
    link: "#"
  },
  {
    title: "Affordable Care Act (ACA)",
    description: "Expands access to health insurance and lowers costs.",
    image: "./assets/image/aca.png",
    link: "#"
  },
  {
    title: "Universal Credit",
    description: "Helps with living costs for low-income individuals.",
    image: "./assets/image/universal-credit.png",
    link: "#"
  },
  {
    title: "JobSeeker Payment",
    description: "Financial help for those looking for work or who are sick.",
    image: "./assets/image/jobseeker.png",
    link: "#"
  },
  {
    title: "Canada Child Benefit",
    description: "Monthly payment to help with raising children costs.",
    image: "./assets/image/ccb.png",
    link: "#"
  },
  {
    title: "Bolsa Família",
    description: "Conditional cash transfer program to reduce poverty.",
    image: "./assets/image/bolsa-familia.png",
    link: "#"
  },
  {
    title: "Child Allowance",
    description: "Financial support for families with children rasing.",
    image: "./assets/image/child-allowance.png",
    link: "#"
  },
  // Add more schemes as needed...
];


function GovSchemes() {
  return (
    <>
      <SectionHeading title="New Government Schemes" />
      <div className="govt-introduction">
        <h2>Empowering Citizens Through Government Schemes</h2>
        <p>
          Government schemes play a crucial role in enhancing the welfare of citizens
          by providing financial support and services that cater to various needs. 
          These schemes are designed to empower individuals and families, improve 
          livelihoods, and promote social equality. Here, we present a list of 
          significant government schemes that aim to create a better future for all.
        </p>
      </div>
      <div className='govt-news'>
        {schemes.map((scheme, index) => (
          <div key={index} className='govt-container'>
            <div className='govt-image' style={{ backgroundImage: `url(${scheme.image})` }}></div>
            <div className='govt-content'>
              <div className='govt-heading'>{scheme.title}</div>
              <div className='govt-description'>{scheme.description}</div>
              <div className='govt-line'></div>
              <a href={scheme.link} className='govt-learn-more'>
                <span className='learn-more-text'>Learn more</span>
                <span className='arrow-icon'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4492 2.94922L17.4999 9.99994L10.4492 17.0507" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.4999 10L2.5 10" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GovSchemes;
