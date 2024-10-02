import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './DailyNews.module.css'; // Import the CSS Module

// Sample dataset for daily news
const newsData = [
  {
    id: 1,
    companyName: "Peak X V",
    time: "12pm",
    headline: "Peak XV Pares Size Of Its Largest Fund By 16%, Slashes Fees",
    description: "Venture capital firm Peak XV Partners, formerly Sequoia Capital India, has pared the size of its $2.85 Bn fund by 16% or $465 Mn more than a year after it split from Silicon Valley-based Sequoia Capital....",
    imageUrl: "data:image/png;base64,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",
  },
  {
    id: 2,
    companyName: "Grow",
    time: "1pm",
    headline: "Groww Operator’s FY24 PAT Soars 4X To INR 297 Cr, Revenue Up 2X",
    description: "Invest Tech, which operates online stock broking giant Groww, reported a 4X year-on-year (YoY) jump in its net profit to INR 297.8 Cr in the fiscal ended March 2024 (FY24), as per information shared with credit rating agency ICRA....",
    imageUrl: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2024/10/groww-FY24-featured-760x570.png",
  },
  {
    id: 3,
    companyName: "Zerodha",
    time: "2pm",
    headline: "Zerodha Sticks To Zero-Brokerage Model As SEBI’s True-To-Label Norms Kick In",
    description: "cofounder and CEO Nithin Kamath said that equity delivery on the online stock broking platform will continue to remain free even as SEBI’s flat free structure came into effect on October 1.“Equity delivery will continue to be free at @zerodhaonline. As of now, we are not making any changes to our brokerage,” Kamath said in a post on X..",
    imageUrl: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2024/10/zerodha-free-featured-760x570.png",
  },
];

function DailyNews() {
  return (
    <>
      <SectionHeading title="Daily NewsLetter" />
      <div className={styles.News1}>
        {newsData.map((news) => (
          <div key={news.id} className={styles.container}>
            <div className={styles.textContent}>
              <div className={styles.companyTime}>
                <span className={styles.companyName}>{news.companyName}</span>
                <span className={styles.time}>{news.time}</span>
              </div>
              <h1 className={styles.headingNews}>
                {news.headline}
              </h1>
              <div className={styles.description}>
                {news.description}
              </div>
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${news.imageUrl})` }}></div>

          </div>
        ))}
      </div>
    </>
  );
}

export default DailyNews;
