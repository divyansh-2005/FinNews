// src/components/MyFeedSecion/MyFeed.js

import React, { useState } from "react";
import "./MyFeed.css"; // Add CSS for styling

const MyFeed = () => {
  // Expanded feed data; can be replaced with API calls
  const [feedItems] = useState([
    {
      id: 1,
      img: "https://wallpaperaccess.com/full/1393720.jpg",
      title: "Stock Market Updates",
      content: "Stock market saw significant growth today...",
      date: "2024-10-01",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/bitcoin-blockchain-crypto-currency-digital-money-exchange-technology-symbol-generative-ai_1423-7066.jpg",
      title: "Cryptocurrency News",
      content: "Bitcoin reached an all-time high of $60,000...",
      date: "2024-10-02",
    },
    {
      id: 3,
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/12/full/1665598406-7162.jpg",
      title: "Economy Insights",
      content: "Global economy is showing signs of recovery...",
      date: "2024-10-03",
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/R.00a2fc96129f9cf715484951d6bd65a4?rik=jjJXS6rTj7eZlg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f8%2f9%2f536913.jpg&ehk=Oux0h4qpYzvq9CfHmKAkQMHCFyVZ%2fdgOkO5Yfjq0Czo%3d&risl=&pid=ImgRaw&r=0",
      title: "Tech Stocks Surge",
      content: "Rise in Tech Stocks despite new launches...",
      date: "2024-10-04",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/originals/ad/25/33/ad25330f390434fd1df149dd238a71b0.jpg",
      title: "Real Estate Boom",
      content: "Real estate market booming in several cities...",
      date: "2024-10-05",
    },
    {
      id: 6,
      img: "https://www.thoughtco.com/thmb/2kIqXYs_M43Nh6CAwFRlyqzDXuM=/1500x1000/filters:fill(auto,1)/GoldBars-58e560733df78c5162e711c6.jpg",
      title: "Gold Prices Drop",
      content: "Gold prices saw a drop as investors shift focus...",
      date: "2024-10-06",
    },
    {
      id: 7,
      title: "Interest Rate Hike",
      img: "https://th.bing.com/th/id/OIP.JPKtp7H_cywVhbYS3QC_oQHaE8?rs=1&pid=ImgDetMain",
      content: "Federal Res. expected to raise interest rates...",
      date: "2024-10-07",
    },
    {
      id: 8,
      img: "https://static.vecteezy.com/system/resources/previews/022/506/525/large_2x/green-energy-sustainable-industry-environmental-social-and-corporate-governance-concept-free-photo.jpg",
      title: "Sustainable Investments",
      content: "Investing in sustainable companies is hiking...",
      date: "2024-10-08",
    },
    {
      id: 9,
      img: "https://th.bing.com/th/id/OIP.1OaIOj0DBK-_0AxJZaXJ8gHaDK?rs=1&pid=ImgDetMain",
      title: "Market Predictions",
      content: "Experts predictions for upcoming quarter...",
      date: "2024-10-09",
    },
    {
      id: 10,
      img: "https://niveshmarket.com/wp-content/uploads/2019/11/financial-literacy-in-students.jpg",
      title: "Financial Literacy Programs",
      content: "New programs introduced to improve...",
      date: "2024-10-10",
    },
    {
      id: 11,
      img: "https://www.brinknews.com/wp-content/uploads/2021/01/GettyImages-1193594675.jpg",
      title: "Global Trade Updates",
      content: "Changes trade policies, affecting markets...",
      date: "2024-10-11",
    },
    {
      id: 12,
      img: "https://th.bing.com/th/id/OIP.2grLZn-t8p5jTe3vwuZstAHaEE?rs=1&pid=ImgDetMain",
      title: "Emerging Markets",
      content: "Investors turning eyes to emerging markets...",
      date: "2024-10-12",
    },
  ]);

  return (
    <div className="feed-container">
      <h2 className="feed-title">Explore Our Feed</h2>
      <div className="feed-list">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <div>{item.line}</div>
            <p>{item.content}</p>
            <span className="feed-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
