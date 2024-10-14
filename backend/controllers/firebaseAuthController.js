const admin = require('../config/firebase-config');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const firebaseAuth = async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email, uid } = decodedToken;

    let user = await User.findOne({ email });
    if (!user) {
      // Create a new user if they don't exist
      user = new User({
        name,
        email,
        googleId: uid
      });
      await user.save();
    } else {
      // Update the existing user's information
      user.name = name;
      user.googleId = uid;
      await user.save();
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY);
    res.status(200).json({ user: { name: user.name, email: user.email }, token });
  } catch (error) {
    console.error("Firebase authentication error:", error);
    res.status(500).json({ message: "Something went wrong with Firebase authentication" });
  }
};

module.exports = { firebaseAuth };