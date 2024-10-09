import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './DailyNews.module.css'; // Import the CSS Module
import backendEndPoint from '../../common/CommonBackendEndpoints.jsx'
import { useEffect, useState } from 'react';
function DailyNews() {
  const [dailyNewsLetter, setdailyNewsLetter] = useState([])

  console.log('dailyNewsLetter :', dailyNewsLetter);

  const fetchNewsLetter = async (req, res) => {
    try {
      const response = await fetch(backendEndPoint.dailyNewsetter.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('data:', response)
      setdailyNewsLetter(responseData)
    } catch (error) {
      console.log('error :', error)
    }
  }

  useEffect(() => {
    fetchNewsLetter();
  }, [])
  return (
    <>
      <SectionHeading title="Daily NewsLetter" />
      <div className={styles.News1}>
        {dailyNewsLetter.map((news, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.textContent}>
              <div className={styles.companyTime}>
                <span className={styles.companyName}>
                  {news.title.includes("OpenAI") ? "OpenAI" :
                    news.title.includes("Swiggy") ? "Swiggy" :
                      news.title.includes("SpiceJet") ? "SpiceJet" :
                        news.title.includes("Apple") ? "Apple" :
                          news.title.includes("Zerodha") ? "Zerodha" :
                            news.title.includes("Zepto") ? "Zepto" :
                              news.title.includes("Gemini") ? "Gemini" :
                                news.title.includes("NASA") ? "NASA" :
                                  news.title.includes("Nasa") ? "Nasa" :
                                    news.title.includes("Samsung") ? "Samsung" : "Unknown"}
                </span>
                <span className={styles.time}>{news.publishedAt} </span>
              </div>
              <div className={styles.descriptionContainer}>
                <h1 className={styles.headingNews}>
                  {news.title}
                </h1>
                <p className={styles.description}>
                  {news.description}
                </p>
              </div>
            </div>
            <div className={styles.image}><img src={news.image} alt='containt-img' /></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DailyNews;
