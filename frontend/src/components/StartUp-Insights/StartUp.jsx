import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './StartUp.css'
import { useState, useEffect } from 'react';
import axios from "axios";
function StartUp() {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get(`/api/top-headlines/sources?category=business&language=en&apiKey=ec51baacd93a47659e54b9fe5019b0d3`);
      //console.log(response, "News feed from NewsAPI");
      setFeed(response.data.sources);
    }
    fetchNews();
  }, [])

  return (
    <>
      <SectionHeading title="StartUp Insights" />
      <div className="startup-insights">
      {feed.map((item) => (
      <div className="startup-container" key={item.name}>
        <div className="top-box">
          <div className="organization-details">
            <div className="organization">
            {item.name}
            </div>
          </div>
        </div>
        <div className="description-container">
          <div className="paragraph">
            {item.description}
          </div>
          <a href= {item.url} className="link" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
      ))}
      </div>
    </>
  );
}

export default StartUp;
