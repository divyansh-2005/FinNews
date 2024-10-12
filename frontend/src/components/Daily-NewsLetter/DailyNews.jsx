import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./DailyNews.module.css"; // Import the CSS Module

const DailyNews = () => {
  // Simulated newsletter data
  const dailyNewsLetter = [
    {
      title: "Market Insights for October",
      description:
        "Get the latest trends and movements in the financial markets for October.",
      date: "2024-10-01",
    },
    {
      title: "Tech Stocks to Watch",
      description:
        "An in-depth analysis of technology stocks that are leading the market.",
      date: "2024-09-29",
    },
    {
      title: "Crypto Market Update",
      description:
        "Find out what's happening in the volatile world of cryptocurrencies.",
      date: "2024-09-28",
    },
    {
      title: "Interest Rates and Inflation",
      description:
        "How interest rates are impacting inflation and what to expect next.",
      date: "2024-09-27",
    },
    {
      title: "Investment Strategies for 2024",
      description:
        "Strategic approaches to investing in 2024 to maximize returns.",
      date: "2024-09-26",
    },
    {
      title: "Financial Planning Tips",
      description:
        "Essential tips to keep your financial plan on track this year.",
      date: "2024-09-25",
    },
    {
      title: "AI and Finance",
      description:
        "How artificial intelligence is transforming the finance sector.",
      date: "2024-09-24",
    },
    {
      title: "Understanding ETFs",
      description:
        "A comprehensive guide to Exchange-Traded Funds and how to invest.",
      date: "2024-09-23",
    },
    {
      title: "Sustainable Investing",
      description: "Why sustainability matters in your investment portfolio.",
      date: "2024-09-22",
    },
    {
      title: "Global Economic Outlook",
      description: "What's ahead for the global economy in the coming months.",
      date: "2024-09-21",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(3); // Number of newsletters per page

  // Calculate index values for pagination
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = dailyNewsLetter.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons dynamically based on the total number of newsletters
  const totalPages = Math.ceil(dailyNewsLetter.length / newsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <SectionHeading title="Daily Newsletter" />
      <div className={styles.newsletterContainer}>
        {currentNews.length === 0 ? (
          <p>No newsletters available.</p>
        ) : (
          currentNews.map((newsItem, index) => (
            <div key={index} className={styles.newsletterItem}>
              <h3 className={styles.newsletterTitle}>{newsItem.title}</h3>
              <p className={styles.newsletterDescription}>
                {newsItem.description}
              </p>
              <p className={styles.newsletterDate}>
                {new Date(newsItem.date).toDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`${styles.pageButton} ${
              currentPage === number ? styles.activePage : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default DailyNews;
