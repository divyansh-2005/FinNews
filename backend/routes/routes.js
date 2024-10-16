const express = require('express');
const router = express.Router(); // Create a new router object

const fetchLatestFinanceNews = require('../controllers/allLatestFinancialUpdates.js');
const fetchStartUpInsights = require('../controllers/startupInsites.js');
const fetchDailyNews = require('../controllers/DailyNewsLetter.js')
const { postBlog, getBlog, deleteAllBlogs } = require('../controllers/blogController.js');

router.get('/latest-financial-news', fetchLatestFinanceNews); // Route to fetch top financial news in India
router.get('/startup-insights', fetchStartUpInsights); // Route to fetch top startup insights
router.get('/fetch-dailyNews', fetchDailyNews); // Route to fetch daily news
router.post('/post-blog', postBlog); // Route to fetch daily news
router.get('/get-blog', getBlog); // Route to fetch daily news
router.delete('/delete-all-blog', deleteAllBlogs); // Route to fetch daily news



module.exports = router; // Export the router to use in other files

