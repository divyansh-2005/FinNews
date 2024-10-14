const express = require("express");
const { signup, signin, getUserInfo } = require("../controllers/userController");
const user = require("../models/user");
const auth = require("../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/signup",signup)

userRouter.post("/signin",signin)

userRouter.get("/me", auth, getUserInfo)

module.exports = userRouter;