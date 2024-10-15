import React, { useState } from "react";
import styles from "./Help.module.css";
import { CiSearch } from "react-icons/ci";

function Help() {
  const faqData = [
    {
      question: "What is Prolega?",
      answer:
        "Prolega is India's first smart news FIN-APP, where intelligence meets finance. We provide cutting-edge financial news and analysis powered by AI technology.",
    },
    {
      question: "How do I use Fin-Buddy?",
      answer:
        "Fin-Buddy is our AI-powered financial assistant. You can ask it questions about market trends, company performance, or general financial advice. Simply type your query in the chat interface to get started.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data security very seriously. All user data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent.",
    },
    {
      question: "How often is the news updated?",
      answer:
        "Our news feed is updated in real-time, ensuring you always have access to the latest financial information and market updates.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    // Add the following div to display the help page content 
    <div
      style={{
        padding: "60px",

        backgroundColor: "#ffeffe",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#333", textAlign: "center" }}>
        Get expert assistance and all the support you need
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "800px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        To use our help page, simply enter your question or keyword in the
        search bar at the top. You can also browse through the FAQs. If you
        can't find the answer you're looking for, please don't hesitate to
        contact our support team using the information provided. Remember to be
        as specific as possible in your search queries for the best results. Our
        help page is regularly updated, so be sure to check back for the latest
        information.
      </p>
         {/* Add the following div to display the search bar */}
      <div className={styles.searchContainer}>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Search your query"
        />
        <CiSearch className={styles.searchIcon} />
      </div>
        {/* Add the following div to display the FAQ content */}
      <div className={styles.faqContent}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <h3
                className={styles.faqQuestion}
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex(
                    (prevIndex) => (prevIndex === index ? null : index),
                    setOpen(!open)
                  )
                }
              >
                {item.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </h3>
              <div
                className={`${styles.faqAnswer} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        
      </div>
     {/* Add the following div to display the email box */}
          <div className={styles.emailBox}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need assistance, please contact our
              support team at:
            </p>
            <p>
              Email: support@finnews.com</p>
          </div>
    </div>
  );
}

export default Help;
