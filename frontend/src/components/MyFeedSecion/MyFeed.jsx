// src/components/MyFeedSecion/MyFeed.js

import React, { useState } from 'react';
import './MyFeed.css'; // Import the CSS for styling

const MyFeed = () => {
  

  const [mainNews] = useState([
    {
      id: 1,
      title: "India achieves major breakthrough in lunar exploration",
      content: "ISRO's latest lunar mission has discovered traces of frozen water on the Moon's south pole.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      id: 2,
      title: "Global markets see a sudden rise in tech stocks",
      content: "Technology stocks surge as investors anticipate new breakthroughs in AI innovation.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      id: 3,
      title: "AI-generated art sparks debate in digital art communities",
      content: "Creators argue whether AI tools diminish the value of traditional artistry.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
  ]);

  const [latestNews] = useState([
    { id: 1, time: "8 mins ago - World", title: "Kamala Harris to release medical report confirming fitness for presidency: campaign" },
    { id: 2, time: "28 mins ago - Kochi", title: "Kochi cyber police arrest two on charges of making pirated copies of films" },
    { id: 3, time: "32 mins ago - India", title: "Centre releases first installment of Finance Commission grant for Andhra, Rajasthan" },
    { id: 4, time: "34 mins ago - India", title: "MEA urges Bangladesh to ensure safety of Hindus amid Durga Puja tensions" },
    { id: 5, time: "45 mins ago - Sports", title: "India qualifies for World Cup semi-finals with a thrilling win" },
  ]);

  const [pastWeekNews] = useState([
    { id: 1, title: "Is there a hidden molten rock at the core of the Moon?" },
    { id: 2, title: "Discover 8 animals that suck blood for survival" },
    { id: 3, title: "75+ Happy Dussehra messages, greetings, and quotes for 2024" },
    { id: 4, title: "Happy Dussehra 2024: Images, quotes, and wishes" },
    { id: 5, title: "Top 50 Dussehra messages, wishes, and quotes to share in 2024" },
    { id: 1, title: "Is there a hidden molten rock at the core of the Moon?" },
    { id: 2, title: "Discover 8 animals that suck blood for survival" },
    { id: 3, title: "75+ Happy Dussehra messages, greetings, and quotes for 2024" },
    { id: 4, title: "Happy Dussehra 2024: Images, quotes, and wishes" },
    { id: 5, title: "Top 50 Dussehra messages, wishes, and quotes to share in 2024" },
  ]);

  return (
    <>
    <div className="feed-container">
      {/* Main News Section */}
      <div className="main-news">
        <h2>Main News Feed</h2>
        {mainNews.map((news) => (
          <div className="main-news-item" key={news.id}>
            <img src={news.image} alt={news.title} className="main-news-image" />
            <div className="main-news-content">
              <h3>{news.title}</h3>
              <p>{news.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest News Section */}
      <div className="sidebar-news">
        <h2 className="section-title">Latest News</h2>
        <div className="latest-news-list">
          {latestNews.map((item) => (
            <div className="latest-news-item" key={item.id}>
              <div className="news-timestamp">{item.time}</div>
              <p className="news-title">
                {item.title}
                <span className="read-arrow"> → </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Past Week News with Horizontal Scroller */}
    <div className="past-week-full-container">
      <div className="past-news-container">
        <h2 className="past-news-title">Past Week News <span>&#x2192;</span></h2>
        <div className="past-news-list">
          {pastWeekNews.map((item) => (
            <div className="past-news-item" key={item.id}>
              <div className="past-news-image">FinNews</div> {/* Placeholder for image */}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default MyFeed;
