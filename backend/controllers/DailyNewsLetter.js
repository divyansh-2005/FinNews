const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const API_KEYS = [
    'ae4ea299e5fb83e2d93341dc2445749a',
    "6313b1935d3a852b1351dd834e708218",
    "fcb686e1d04ad5d3cb48e3f772c3380f",
    "e2f2e20563c479e8bc7a3ac410c0548c",
    '00f93f86de27468e4f996f498a5f810e'
]

let currentKeyIndex = 0;


// Route to fetch top financial news in India
const fetchDailyNewsLetter = async (req, res) => {
    const apiKey = API_KEYS[currentKeyIndex]; // Use the current API key
    try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
            params: {
                topic: 'general',
                country: 'in',  // India
                lang: 'en',     // Fetch news only in English
                token: apiKey  // Your GNews API key
            }
        });
if(response.status === 429 || response.status ===403){
      // Handle rate limit exceeded
    console.log(`API key ${apiKey} reached its limit. Switching to the next key.`)
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

module.exports = fetchDailyNewsLetter;
