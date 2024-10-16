import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./DailyNews.module.css"; // Import the CSS Module
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      title: "Investment Strategies tips",
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
    {
      title: "Investment Strategies",
      description:
        "Strategic approaches to investing in 2024 to maximize returns.",
      date: "2024-09-26",
    },
  ];

  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  // Slider settings for the multi-item carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive,
  };
  return (
    <>
      <SectionHeading title="Daily Newsletter" />
      <div className={styles.newsletterContainer}>
        <Slider {...settings}>
          {dailyNewsLetter.map((newsItem, index) => (
            <div className="item">
              <div key={index} className={styles.newsletterItem}>
                <h3 className={styles.newsletterTitle}>{newsItem.title}</h3>
                <p className={styles.newsletterDescription}>
                  {newsItem.description}
                </p>
                <p className={styles.newsletterDate}>
                  {new Date(newsItem.date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DailyNews;
