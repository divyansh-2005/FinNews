import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const DailyNews = () => {
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
  const [newsPerPage] = useState(3);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = dailyNewsLetter.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(dailyNewsLetter.length / newsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <SectionHeading title="Daily Newsletter" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {currentNews.length === 0 ? (
          <p>No newsletters available.</p>
        ) : (
          currentNews.map((newsItem, index) => (
            <div
              key={index}
              className="bg-[#ffeffe] rounded-lg p-4 hover:border hover:border-black"
            >
              <h3 className="text-xl font-bold mb-2 font-[Franklin Gothic Medium]">
                {newsItem.title}
              </h3>
              <p className="text-base text-[#383636] mb-2">
                {newsItem.description}
              </p>
              <p className="text-sm text-[#502828]">
                {new Date(newsItem.date).toDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center my-5">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-4 py-2 mx-2 rounded-md ${
              currentPage === number
                ? "bg-[#007bff] text-white"
                : "bg-[#e0e0e0] hover:bg-[#ccc]"
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
