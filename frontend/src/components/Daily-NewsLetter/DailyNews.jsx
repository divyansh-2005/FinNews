import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './DailyNews.module.css'; // Import the CSS Module
import backendEndPoint from '../../common/CommonBackendEndpoints.jsx'
import { useEffect, useState } from 'react';

//used this dummy data for development
// const dummyData = [
//   {
//     title: "OpenAI Releases New Model",
//     publishedAt: "2024-10-07",
//     description: "OpenAI has released a new model that enhances AI capabilities.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Swiggy Expands Delivery Services",
//     publishedAt: "2024-10-06",
//     description: "Swiggy announces expansion of its delivery services to more cities.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Apple Unveils New iPhone",
//     publishedAt: "2024-10-05",
//     description: "Apple has unveiled its latest iPhone with amazing features.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "NASA Discovers New Exoplanet",
//     publishedAt: "2024-10-04",
//     description: "NASA announces the discovery of a new exoplanet in a habitable zone.",
//     image: "https://via.placeholder.com/150",
//   },
// ];



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
    // setdailyNewsLetter(dummyData)  //used this dummy data for development
  }, [])
  return (
    <>
      <SectionHeading title="Daily NewsLetter" />
      <div className={styles.News1}>
        {dailyNewsLetter.map((news, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image}><img src={news.image} alt='containt-img' /></div>
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
              </div>
              <h1 className={styles.headingNews}>
                {news.title}
              </h1>
              <div className={styles.description}>
                {news.description}
              </div>
              <span className={styles.line}></span>
              <span className={styles.time}>{news.publishedAt} </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DailyNews;
