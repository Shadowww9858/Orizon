// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKH20adtSvngIb91poGbkKK7gtarmp8Ek",
  authDomain: "orizon-f628a.firebaseapp.com",
  projectId: "orizon-f628a",
  storageBucket: "orizon-f628a.firebasestorage.app",
  messagingSenderId: "1088412334986",
  appId: "1:1088412334986:web:205e049b711b0c0cb2a673",
  measurementId: "G-LREZXC46GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
