import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./News.css"; // Ensure this file includes necessary styles

const News = () => {
  const [likes, setLikes] = useState([0, 0, 0, 0, 0]); // Initialize likes for 5 articles
  const [comments, setComments] = useState([[], [], [], [], []]); // Initialize comments for 5 articles
  const [newComment, setNewComment] = useState(["", "", "", "", ""]); // Store new comments

  const newsArticles = [
    {
      img: "https://www.financialexpress.com/wp-content/uploads/2024/10/BSE-Image-reuters.jpg?w=1024",
      title: "Stock Market Live: Markets wipe out early gains! Nifty at 24,900, Sensex plunges over 400 points; Media and PSU Banks see sharp cut",
      content: `"Stock market today live updates: Suzlon Energy hit the 5% lower circuit. Shares of midcap renewable energy firm Suzlon Energy hit the 5% lower circuit at Rs 70.98 during intra-day trading on Monday, marking the eighth consecutive session of decline. The stock has plunged over 15% since September 25, 2024. The sharp drop in Suzlon’s stock price follows an ‘advisory cum warning’ issued by the BSE and NSE earlier this month. The exchanges raised concerns about the company’s corporate governance practices after the resignation of independent director Marc Desaedeleer. Both exchanges stressed that any future non-compliance with governance standards would be taken seriously."`,
    },
    {
      img: "https://www.financialexpress.com/wp-content/uploads/2024/09/Vodafone-Idea-jumps-over-9.png?w=1024",
      title: "Vodafone Idea shares slide 7% to 52-week lows after DoT notice on bank guarantees",
      content: `"Shares of Vodafone Idea plummeted over 7%, trading at Rs 8.90 on the National Stock Exchange (NSE) today, following a notice issued by the Department of Telecommunications (DoT) regarding the company’s failure to pay required bank guarantees for past spectrum auction dues. DoT’s notice highlighted Vodafone Idea’s non-compliance in submitting the necessary bank guarantees linked to spectrum auction payments. This development occurs as the DoT engages with the finance ministry to discuss the potential waiver of the bank guarantee requirement, although no definitive decision has been reached."`,
    },
    {
      img: "https://www.financialexpress.com/wp-content/uploads/2024/08/FPIs.jpg?w=1024",
      title: "Foreign investors withdraw Rs 27,142 crore in first week of October amidst Israel-Iran tension",
      content: `"Foreign Portfolio Investors (FPIs) have turned net sellers in October, offloading shares worth Rs 27,142 crore in the first three trading sessions, driven by escalating tensions between Israel and Iran, rising crude oil prices, and a rebound in Chinese markets. This outflow follows a nine-month high of Rs 57,724 crore in FPI investments in September. Since June, FPIs had consistently purchased equities after withdrawing Rs 34,252 crore in April and May. Overall, FPIs have been net buyers in 2024, aside from January, April, and May, according to depository data."`,
    },
    {
      img: "https://tradebrains.in/wp-content/uploads/2018/07/latest-financial-news.jpeg",
      title: "Global Markets React to Inflation Data",
      content: `"In a recent report, global markets showed mixed reactions following the release of inflation data for the month of September. Investors are grappling with the implications of **higher-than-expected inflation rates**, which have led to speculation regarding potential **interest rate hikes** by central banks. Stock markets in the U.S. opened lower as traders adjusted their expectations. Meanwhile, European markets experienced a slight uptick as some investors viewed the dip as a buying opportunity. Analysts suggest that the ongoing **geopolitical tensions** and **rising energy prices** are likely to impact market sentiment in the coming weeks. As central banks prepare for their next moves, market participants remain vigilant and ready to react to further economic indicators."`,
    },
    {
      img: "https://especia.co.in/content/upload/2023/06/physicswallah-acquires-50-stake-in-xylem-newsespeciajpgsf8lukem.jpg",
      title: "Xylem and Physics Wala Announce Exciting Collaboration",
      content: `"In a groundbreaking partnership, **Xylem Inc.**, a leading global water technology company, has joined forces with **Physics Wala**, a prominent educational platform in India, to enhance **STEM education**. This collaboration aims to integrate innovative water management solutions into Physics Wala's curriculum, offering students hands-on experience with **real-world applications**. The initiative will feature workshops, webinars, and interactive sessions led by industry experts from Xylem. By bridging the gap between theoretical knowledge and practical skills, this partnership seeks to inspire the next generation of engineers and scientists. Xylem's commitment to **sustainability** aligns perfectly with Physics Wala's mission to make quality education accessible, paving the way for future innovations in **water conservation** and management."`,
    },
  ];

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1; // Increment the like count
    setLikes(updatedLikes);
  };

  const handleCommentChange = (index, value) => {
    const updatedComments = [...newComment];
    updatedComments[index] = value; // Update the new comment for the corresponding index
    setNewComment(updatedComments);
  };

  const handleCommentSubmit = (index) => {
    if (newComment[index].trim()) {
      const updatedComments = [...comments];
      updatedComments[index] = [...updatedComments[index], newComment[index]]; // Add new comment to the list
      setComments(updatedComments);

      // Clear the input field after submission
      const updatedNewComment = [...newComment];
      updatedNewComment[index] = "";
      setNewComment(updatedNewComment);
    }
  };

  return (
    <div className="news-section" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Helmet>
        <title>Latest Finance News</title>
        <meta name="description" content="Latest updates in finance news" />
      </Helmet>

      <h2 className="news-heading">All Latest Finance News</h2>

      <div className="news-container">
        {newsArticles.map((news, index) => (
          <div className="news-card" key={index}>
            <img
              src={news.img}
              alt={news.title}
              className="news-image"
              style={{ height: '200px', objectFit: 'cover' }} // Increased height
            />
            <h3 className="news-title">{news.title}</h3>
            <p className="news-content">{news.content}</p>

            <div className="news-actions">
              <button className="like-button" onClick={() => handleLike(index)}>
                👍 {likes[index]} {/* Display the number of likes */}
              </button>
              <button className="comment-button" onClick={() => handleCommentSubmit(index)}>
                💬
              </button>
            </div>

            {/* Comment input */}
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment[index]}
              onChange={(e) => handleCommentChange(index, e.target.value)}
              className="comment-input"
            />

            {/* Display comments */}
            <div className="comments">
              {comments[index].map((comment, commentIndex) => (
                <p key={commentIndex} className="comment">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
