// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVn193nrLf6jkSWcdXB9IALmgQFqhU6j0",
  authDomain: "foothub-69.firebaseapp.com",
  projectId: "foothub-69",
  storageBucket: "foothub-69.appspot.com",
  messagingSenderId: "605006746987",
  appId: "1:605006746987:web:f112ffed8c94707b8b282e",
  measurementId: "G-YY2BEJGJFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);