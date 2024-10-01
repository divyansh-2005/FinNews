import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './DailyNews.module.css'; // Import the CSS Module

function DailyNews() {
  return (
    <>
      <SectionHeading title="Daily NewsLetter" />
      <div className={styles.News1}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.textContent}>
              <div className={styles.companyTime}>
                <span className={styles.companyName}>company</span>
                <span className={styles.time}>12pm</span>
              </div>
              <h1 className={styles.headingNews}>
                Headline Lorem ipsum dolor sit amet consecte tur abur adipiscing elit semper dalaracc lacus vel.
              </h1>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm. Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm...
              </div>
            </div>
            <div className={styles.image}></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DailyNews;
