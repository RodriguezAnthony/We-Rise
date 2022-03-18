// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgICwZ1HtNysiW5m_fyh21A91Fpu3-5kE",
  authDomain: "we-rise-cc59b.firebaseapp.com",
  projectId: "we-rise-cc59b",
  storageBucket: "we-rise-cc59b.appspot.com",
  messagingSenderId: "761429073102",
  appId: "1:761429073102:web:9133238932c1e6a79d449f",
  measurementId: "G-SJCDH59S3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);