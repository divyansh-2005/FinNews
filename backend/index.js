const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require('./routes/routes');

dotenv.config();

app.use(cors()); // Allow all origins for now, you can restrict later
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

        // Start the server on localhost
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    })
    .catch((error) => {
        console.error("mongodb error:", error);
    });

module.exports = app;