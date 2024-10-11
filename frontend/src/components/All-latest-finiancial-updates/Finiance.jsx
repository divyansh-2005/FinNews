import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import styles from "./Finance.module.css"; // Ensure the CSS Module file name is correct
import commonEndpoint from "../../common/CommonBackendEndpoints.jsx";

function Finance() {
  const [news, setNews] = useState([]);

  // Fetching financial news from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(commonEndpoint + '/finance-news'); // Update the endpoint as necessary
        const data = await response.json();
        setNews(data); // Assuming the API response is directly usable
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.financeContainer}>
      <SectionHeading title="Latest Financial News" />
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            <img src={article.image} alt={article.title} className={styles.newsImage} />
            <h3 className={styles.newsTitle}>{article.title}</h3>
            <p className={styles.newsDescription}>{article.description}</p>
            <p className={styles.newsDate}>
              Published on: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Finance;
