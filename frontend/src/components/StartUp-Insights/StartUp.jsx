import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './StartUp.css'

function StartUp() {
  return (
  
    <>
      <SectionHeading title="StartUp Insights" />
      <div className="startup-insights">
      {Array.from({ length: 5 }).map((_, index) => (
        <>
      <div className="startup-container">
        <div className="startup"></div>
        <div className="top-box">
          <div className="img"></div>
          <div className="organization-details">
            <div className="organization-img"></div>
            <div className="organization">ORGANIZATION</div>
          </div>
          <div className="startup-heading">StartUp</div>
          <div className="summary-box">
            <div className="summary">Summary</div>
          </div>
        </div>
        <div className="description-container">
          <div className="about">About</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur tur adipiscing elit semper dalarac lacus vel facilisis volutpat est velitom.
          </div>
          <a href="#" className="link">Learn More</a>
        </div>
      </div>
      </>
      ))}
      </div>
    </>
  )
}

export default StartUp;
