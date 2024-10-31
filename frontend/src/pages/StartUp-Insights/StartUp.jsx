import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './StartUp.css'
import { useEffect } from 'react';
function StartUp() {
  const [startupsInsightsData, setStartupsInsightsData] = React.useState([]);

  const fetchStartupsInsightsData = async (req, res) => {
   try {
    const response = await fetch('http://localhost:5000/api/startup-Insights');

    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setStartupsInsightsData(data);
   } catch (error) {
    console.log('error :', error)
   }
   
  }
  useEffect(() => {
    fetchStartupsInsightsData();
  },[])

  return (
    <>
      <SectionHeading title="StartUp Insights" />
      <div className="startup-insights">
      {startupsInsightsData.map((Insights, index) => (
        <>
      <div className="startup-container">
        <div className="startup"></div>
        <div className="top-box">
          <div className="img"><img src={Insights.image} alt='containt-img' /></div>
          <div className="organization-details">
            <div className="organization-img"></div>
            <div className="organization">
            {Insights.title.includes("OpenAI") ? "OpenAI" :
                  Insights.title.includes("Swiggy") ? "Swiggy" :
                  Insights.title.includes("SpiceJet") ? "SpiceJet" :
                  Insights.title.includes("Apple") ? "Apple" :
                  Insights.title.includes("Zerodha") ? "Zerodha" :
                  Insights.title.includes("Zepto") ? "Zepto" :
                  Insights.title.includes("Samsung") ? "Samsung" : "Unknown"}
            </div>
          </div>
          <div className="startup-heading">StartUp</div>
          <div className="summary-box">
            <div className="summary">Summary</div>
          </div>
        </div>
        <div className="description-container">
          <div className="about">About</div>
          <div className="paragraph">
            {Insights.description}
          </div>
          <a href={Insights.url} className="link" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
      </>
      ))}
      </div>
    </>
  );
}

export default StartUp;
