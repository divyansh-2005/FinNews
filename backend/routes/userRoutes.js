const express = require("express");
import {Router} from "express";
const router = Router(); //instance of router
// importing all controller from controller folder
 const { signup, signin,getProfile,forgotPassword,resetPassword,changePassword,updateUser  } = require("../controllers/userController");

import isLoggedIn from "../middlewares/auth.middleware.js";

router.post('/signup',signup);  //avatar name sai jo data aata hai binary form mai usko change kro by middleware function,wha sai file millega as a request. controller mai ja kar "todo code" likho
router.post('/signin', signin);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);
router.post('/forgot-password',forgotPassword);
router.post('/reset/:resetToken',resetPassword);
router.post('/change-password',isLoggedIn,changePassword);
router.put('/update',isLoggedIn,updateUser);

export default router;