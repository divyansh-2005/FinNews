import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Finiance.module.css'; // Import the CSS Module

function Finiance() {
  return (
    <>
      <SectionHeading title="All latest financial updates" />
      <div className={styles.news}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <div className={styles.heading}>Lorem ipsum odor amet, consectetuer adipiscing elit.</div>
              <div className={styles.description}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu natoque nec convallis rhoncus libero parturient sociosqu justo maximus a per ipsum faucibus id erat fringilla vivamus ligula nisi platea donec at aliquet lacinia aenean sodales aptent penatibus ex elit volutpat diam class malesuada volutpat bibendum ipsum ultrices commodo vitae felis.
              </div>

              <div className={styles.line}></div>
              
              <div className={styles.footer}>
                <div className={styles.time}>12 hours ago</div>
                <div className={styles.author}>By Lorem ipsum</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Finiance;
