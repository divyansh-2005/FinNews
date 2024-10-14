import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//To enable Firebase Authentication, you need to create a Firebase project and set up a web app.
//You can get the configuration data from the Firebase console.
//You have to enable the sign-in method in the Firebase console.
//and choose Google as the sign-in provider.
//Firebase authentication develiped by https://manishraj.me/ 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);