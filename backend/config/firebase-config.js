const admin = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
// keep the service account file in the config folder that you can generate from the firebase console 
// and provide the path to the service account file in the require() function in line 3 or give the path in env file. 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;