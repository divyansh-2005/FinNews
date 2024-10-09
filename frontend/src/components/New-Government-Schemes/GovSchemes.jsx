
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./GovSchemes.css";

function GovSchemes() {
  return (
    <>
      <SectionHeading title="New Government Schemes" />
      <div className='govt-news'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className='govt-container' key={index + 1}>
            <div className='govt-image'></div>
            <div className='govt-content'>
              <div className='govt-heading'>Government Schemes Heading</div>
              <div className='govt-description'>
                This is a description of the government schemes. Here you can include details about the latest schemes, benefits, and how to apply for them.
              </div>
              <div className='govt-line'></div>
              <a href="#" className='govt-learn-more'>
                <span className='learn-more-text'>Learn more</span>
                <span className='arrow-icon'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4492 2.94922L17.4999 9.99994L10.4492 17.0507" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.4999 10L2.5 10" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
