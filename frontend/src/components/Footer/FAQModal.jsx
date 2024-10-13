import React, { useState } from 'react';
import styles from './FAQModal.module.css';

const FAQModal = ({ onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What is Prolega?", answer: "Prolega is India's first smart news FIN-APP, where intelligence meets finance. We provide cutting-edge financial news and analysis powered by AI technology." },
    { question: "How do I use Fin-Buddy?", answer: "Fin-Buddy is our AI-powered financial assistant. You can ask it questions about market trends, company performance, or general financial advice. Simply type your query in the chat interface to get started." },
    { question: "Is my personal information secure?", answer: "Yes, we take data security very seriously. All user data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent." },
    { question: "How often is the news updated?", answer: "Our news feed is updated in real-time, ensuring you always have access to the latest financial information and market updates." },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Frequently Asked Questions</h2>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 
                onClick={() => toggleQuestion(index)} 
                className={styles.faqQuestion}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className={styles.arrow}>{openIndex === index ? '▲' : '▼'}</span>
              </h3>
              <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
