// src/components/MyFeedSecion/MyFeed.js

import React, { useEffect, useState } from 'react';
import './MyFeed.css'; // Add CSS for styling
import axios from 'axios';

const MyFeed = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get(`/api/top-headlines?country=us&apiKey=ec51baacd93a47659e54b9fe5019b0d3`);
      console.log(response, "News feed from NewsAPI");
      setFeed(response?.data?.articles);
      //const filteredFeed = feed.filter(news => news.title !== null);
      //console.log("Filtered Feed",filteredFeed);
      //setFeed(filteredFeed);
    }
    fetchNews();
  }, [])
  return (
    <div className="feed-container">
      <h2 className="feed-title">Explore Our Feed</h2>
      <div className="feed-list">
        {feed.map((item) => (
          <div className="feed-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="feed-date"><a href={item.url}>Read More</a></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
