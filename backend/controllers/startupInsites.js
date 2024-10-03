const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const API_KEYS = [
    '27a76f952646a935aeab9298c332562a',
    'b320a17b62387c160fd43b2cb11ba098',
    "9d76289cbaed2cf6554ceb8669937e74",
    "9f098c3703cb12cf253b9c78c170b606",
    "5de5bdaab7d5b1697e35c6de0779ef92",
   
];
let currentKeyIndex = 0;

// Route to fetch top startup insights
const fetchStartUpInsights = async (req, res) => {
    const apiKey = API_KEYS[currentKeyIndex]; // Use the current API key
    try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
            params: {
                q: 'startups OR entrepreneurship OR venture capital OR startup', // Use relevant keywords
                lang: 'en', // Fetch news in English
                country: 'in', // Country can be India or global
                token: apiKey,  // Your GNews API key
              }
        });

        if (response.status === 429 || response.status === 403) {
            // Handle rate limit exceeded
            console.log(`API key ${apiKey} reached its limit. Switching to the next key.`);
            currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length; // Rotate to the next key
            return fetchStartUpInsights(req, res); // Retry with the next key
        }

        res.json(response.data.articles); // Respond with the list of articles
        // console.log("Fetched startup insights successfully:", response.data.articles);
    } catch (error) {
        console.error("Error fetching startup insights:", error);
        res.status(500).json({ message: "Error fetching startup insights" });
    }
};

module.exports = fetchStartUpInsights;
