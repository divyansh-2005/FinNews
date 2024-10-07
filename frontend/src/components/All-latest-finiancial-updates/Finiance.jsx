import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import styles from './Finiance.module.css'; // Import the CSS Module

import { useEffect, useState } from 'react';
import commonendpoint from '../../common/CommonBackendEndpoints.jsx';


//used this dummy data for development
// const dummyFinancialNews = [
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Stock Markets Soar Amid Optimism',
//     description: 'The stock markets saw a significant surge today as investors remain optimistic about the global economy.',
//     publishedAt: '2024-10-07',
//     source: { name: 'Financial Times' },
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Cryptocurrency Prices Fluctuate',
//     description: 'Bitcoin and other cryptocurrencies experienced high volatility today as new regulations are anticipated.',
//     publishedAt: '2024-10-06',
//     source: { name: 'Crypto Daily' },
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'New Tax Policies on the Horizon',
//     description: 'The government is set to introduce new tax policies that could impact both individuals and corporations significantly.',
//     publishedAt: '2024-10-05',
//     source: { name: 'Reuters' },
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Stock Markets Soar Amid Optimism',
//     description: 'The stock markets saw a significant surge today as investors remain optimistic about the global economy.',
//     publishedAt: '2024-10-07',
//     source: { name: 'Financial Times' },
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Stock Markets Soar Amid Optimism',
//     description: 'The stock markets saw a significant surge today as investors remain optimistic about the global economy.',
//     publishedAt: '2024-10-07',
//     source: { name: 'Financial Times' },
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Stock Markets Soar Amid Optimism',
//     description: 'The stock markets saw a significant surge today as investors remain optimistic about the global economy.',
//     publishedAt: '2024-10-07',
//     source: { name: 'Financial Times' },
//   },
// ];


function Finiance() {
  const [news, setNews] = useState([]);



  const latestFinancialNews = async () => {
    try {
      const response = await fetch(commonendpoint.latestFinancialNews.url, {
        method: commonendpoint.latestFinancialNews.method,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // console.log("Fetched news data:", data);
      setNews(data); // Assuming the API returns an array of articles
    } catch (error) {
      console.error("Error fetching financial news:", error);
    }
  };
  useEffect(() => {
    latestFinancialNews();
    // setNews(dummyFinancialNews) //used this dummy data for development
  }, []);



  return (
    <>
      <SectionHeading title="All latest financial updates" />
      <div className={styles.news}>
        {news.map((article, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image}> <img src={article.image} alt='containt-img' /></div>
            <div className={styles.content}>
              <div className={styles.heading}>{article.title}</div>
              <div className={styles.description}>
                {article.description}
              </div>

              <div className={styles.line}></div>

              <div className={styles.footer}>
                <div className={styles.time}> Published At {article.publishedAt}</div>
                <div className={styles.author}>Source : {article.source.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Finiance;
