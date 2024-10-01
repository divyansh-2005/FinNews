// src/components/MyFeedSecion/MyFeed.js

import React, { useState } from 'react';
import './MyFeed.css'; // Add CSS for styling

const MyFeed = () => {
  // Expanded feed data; can be replaced with API calls
  const [feedItems] = useState([
    {
      id: 1,
      title: "Stock Market Updates",
      content: "The stock market saw significant growth today...",
      date: "2024-10-01"
    },
    {
      id: 2,
      title: "Cryptocurrency News",
      content: "Bitcoin reached an all-time high of $60,000...",
      date: "2024-10-02"
    },
    {
      id: 3,
      title: "Economy Insights",
      content: "The global economy is showing signs of recovery...",
      date: "2024-10-03"
    },
    {
      id: 4,
      title: "Tech Stocks Surge",
      content: "Tech companies see a rise in their stocks amid new launches...",
      date: "2024-10-04"
    },
    {
      id: 5,
      title: "Real Estate Boom",
      content: "Real estate market is booming in several major cities...",
      date: "2024-10-05"
    },
    {
      id: 6,
      title: "Gold Prices Drop",
      content: "Gold prices saw a drop as investors shift focus...",
      date: "2024-10-06"
    },
    {
      id: 7,
      title: "Interest Rate Hike",
      content: "The Federal Reserve is expected to raise interest rates next month...",
      date: "2024-10-07"
    },
    {
      id: 8,
      title: "Sustainable Investments",
      content: "Investing in sustainable companies is on the rise...",
      date: "2024-10-08"
    },
    {
      id: 9,
      title: "Market Predictions",
      content: "Experts predict a bullish market for the upcoming quarter...",
      date: "2024-10-09"
    },
    {
      id: 10,
      title: "Financial Literacy Programs",
      content: "New programs are being introduced to improve financial literacy...",
      date: "2024-10-10"
    },
    {
      id: 11,
      title: "Global Trade Updates",
      content: "Changes in trade policies are affecting global markets...",
      date: "2024-10-11"
    },
    {
      id: 12,
      title: "Emerging Markets",
      content: "Investors are turning their eyes to emerging markets for growth...",
      date: "2024-10-12"
    },
  ]);

  return (
    <div className="feed-container">
      <h2 className="feed-title">Explore Our Feed</h2>
      <div className="feed-list">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <span className="feed-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
