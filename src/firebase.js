// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8hE_Ps-wUpk5DDm-fO3uMnvj8GnxJabU",
  authDomain: "sunlightsupply-a57d0.firebaseapp.com",
  projectId: "sunlightsupply-a57d0",
  storageBucket: "sunlightsupply-a57d0.appspot.com",
  messagingSenderId: "399028063207",
  appId: "1:399028063207:web:3b3991136ed26318eb4b42",
  measurementId: "G-7C7R6S7WPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);