import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import styles from './Finiance.module.css'; // Import the CSS Module

import { useEffect, useState } from 'react';
import commonendpoint from '../../common/CommonBackendEndpoints.jsx';

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
  }, []); // Only run once when the component mounts



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
                <div className={styles.time}>Published At{article.publishedAt}</div>
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
