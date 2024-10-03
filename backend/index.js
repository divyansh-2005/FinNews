const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose")

const router = require('./routes/routes');

dotenv.config();
// console.log("SECRET_KEY:",process.env.SECRET_KEY);
// console.log("Mongo_URL:", process.env.MONGO_URL);



app.use(express.json())
app.use(cors())

app.use('/users',userRouter)

app.get("/",(req,res)=>{
    res.send("FinNews Backend")
})

app.use("/api", router);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    
    console.log("connected to mongodb");

    app.listen(PORT,()=>{
        console.log("Server started on port "+PORT);
    })
    
})
.catch((error)=>{
    console.error("mongodb error:",error);
})


