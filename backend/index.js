const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require('./routes/routes');

dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL // Use specific frontend URL for CORS
}));
app.use(express.json());

app.use('/users', userRouter);

app.get("/", (req, res) => {
    res.send("FinNews Backend");
});

app.use("/api", router);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to mongodb");

        // Uncomment this line to run the server on localhost
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    })
    .catch((error) => {
        console.error("mongodb error:", error);
    });

app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 ERROR, Page Not Found');
});

// Export the app for Vercel to handle requests
module.exports = app;
