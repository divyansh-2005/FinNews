const express = require("express");
const { signup, signin, getUserInfo } = require("../controllers/userController");
const user = require("../models/user");
const { firebaseAuth } = require("../controllers/firebaseAuthController");
const auth = require("../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/signup",signup)

userRouter.post("/signin",signin)

userRouter.post("/firebase-auth", firebaseAuth);

userRouter.get("/me", auth, getUserInfo)

module.exports = userRouter;