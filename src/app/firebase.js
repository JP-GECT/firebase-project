// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_KEY,
  authDomain: "fir-learn-567e1.firebaseapp.com",
  projectId: "fir-learn-567e1",
  storageBucket: "fir-learn-567e1.appspot.com",
  messagingSenderId: "514173715125",
  appId: "1:514173715125:web:86ddf246ba88c2940674fc",
  measurementId: "G-39RX7SPRQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);