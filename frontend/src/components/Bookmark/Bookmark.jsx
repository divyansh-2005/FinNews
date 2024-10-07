import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import "./Bookmark.css"; // Import the CSS file

const Bookmark = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  // List of news articles with local image imports and more content
  const newsArticles = [
    {
      id: 1,
      img: img1,
      title: "Gold Price Update: Real-Time Gold and Silver Rates",
      content:
        "Stay updated with the latest real-time prices for gold and silver. Gold prices are soaring this month, and many investors are tracking these shifts. Click 'Read More' to get the full details on how the market is reacting and how this will impact the global economy.",
      fullArticleLink: "https://example.com/full-article-gold-price",
    },
    {
      id: 2,
      img: img2,
      title: "Temenos and Bahwan CyberTek Partner to Develop Country Model Banks",
      content:
        "Temenos partners with Bahwan CyberTek to develop localized banking solutions across seven Asian countries, revolutionizing financial institutions. The partnership aims to accelerate digital transformation with advanced tech solutions. Click 'Read More' for more information.",
      fullArticleLink: "https://example.com/full-article-temenos",
    },
    {
      id: 3,
      img: img3,
      title: "Switching Banks? Prepare for More Hoops to Jump Through",
      content:
        "Switching banks has become more complex with new requirements and increased incentives for customers. Financial institutions are now offering cash incentives, but the hoops to jump through have multiplied. Click 'Read More' to know more about the evolving banking environment.",
      fullArticleLink: "https://example.com/full-article-switching-banks",
    },
    {
      id: 4,
      img: img4,
      title: "Strengthening Cybersecurity and Mitigating Financial Crimes",
      content:
        "The recent CrowdStrike incident revealed critical weaknesses in global payment infrastructures. Businesses are being urged to take swift action to prevent future disruptions and ensure that digital transactions remain secure and resilient in an increasingly cashless world.",
      fullArticleLink: "https://example.com/full-article-cybersecurity",
    },
    {
      id: 5,
      img: img5,
      title: "Fintech’s Role in Accelerating South Korea’s Booming Economy",
      content:
        "South Korea's economy is booming, with fintech driving much of this growth. With advanced technology and digital financial products, the nation is seeing rapid growth in many sectors, transforming its global competitiveness. Click 'Read More' for more insights.",
      fullArticleLink: "https://example.com/full-article-south-korea",
    },
    {
      id: 6,
      img: img6,
      title: "Stabilising The Crypto Frontier: UAE’s Groundbreaking Stablecoin Regulations",
      content:
        "The UAE has positioned itself as a leader in the virtual assets market with forward-thinking stablecoin regulations. Discover how the nation is setting a global benchmark in virtual asset management with new frameworks to enhance financial stability.",
      fullArticleLink: "https://example.com/full-article-uae-stablecoins",
    },
  ];

  // Function to handle bookmarking an article
  const handleBookmark = (article) => {
    // Check if the article is already bookmarked by comparing its id
    const isAlreadyBookmarked = bookmarkedArticles.some(
      (bookmarked) => bookmarked.id === article.id
    );

    // If not already bookmarked, add it to the list
    if (!isAlreadyBookmarked) {
      setBookmarkedArticles((prev) => [...prev, article]);
    }
  };

  return (
    <div className="bookmark-section">
      <h1 className="page-heading">Bookmark Section</h1> {/* Bold and Black Heading */}

      <h2 className="bookmark-heading">Saved and Bookmarked News</h2>

      <div className="bookmark-container">
        {newsArticles.map((news) => (
          <div className="bookmark-card" key={news.id}>
            <img src={news.img} alt={news.title} className="bookmark-image" />

            <h3 className="bookmark-title">{news.title}</h3>
            <p className="bookmark-content">{news.content}</p>

            {/* Read More Button */}
            <a
              href={news.fullArticleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-button"
            >
              Read More
            </a>

            {/* Bookmark Button with Emoji */}
            <button
              className="bookmark-btn"
              onClick={() => handleBookmark(news)}
              disabled={bookmarkedArticles.some(
                (article) => article.id === news.id
              )}
            >
              {bookmarkedArticles.some((article) => article.id === news.id)
                ? "✅ Bookmarked"
                : "🔖 Bookmark"}
            </button>

            {/* Social Media Icons */}
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Display bookmarked articles */}
      {bookmarkedArticles.length > 0 && (
        <div className="bookmarked-news">
          <h3>Bookmarked Articles:</h3>
          {bookmarkedArticles.map((article, idx) => (
            <div key={idx} className="bookmarked-item">
              <h4>{article.title}</h4>
              <a
                href={article.fullArticleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
