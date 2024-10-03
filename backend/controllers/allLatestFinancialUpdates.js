const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const API_KEYS = [
  "f4bce28fa361bba52bb5c221016b0036",
  "b58f27eb6bedf3629340c7bbc45773b9",
  "99d5141157d92faca9af83c822016d87",
  "c8e03b7233f829319558efe31be81e3c",
  "fce44e511722c1e19e70ae77ca79f6c5",
'00c03dfaaf0ee2c2f4908939af0f1f45'
];

let currentKeyIndex = 0;

// Route to fetch top financial news in India
const fetchLatestFinanceNews = async (req, res) => {
  const apiKey = API_KEYS[currentKeyIndex]; // Use the current API key
  try {
    const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        topic: "business",
        country: "in", // India
        lang: "en", // Fetch news only in English
        token: apiKey, // Your GNews API key
      },
    });
    if (response.status === 429 || response.status === 403) {
      // Handle rate limit exceeded
      console.log(
        `API key ${apiKey} reached its limit. Switching to the next key.`
      );
      // Move to the next key and retry the request
      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length; // Rotate to the next key
      return fetchLatestFinanceNews(); // Retry the request with the next key
    }

    res.json(response.data.articles); // Respond with the list of articles
  } catch (error) {
    console.error("Error fetching financial news:", error);
    res.status(500).json({ message: "Error fetching financial news" });
  }
};

module.exports = fetchLatestFinanceNews;
