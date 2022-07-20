// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiwzpRWLvCkO9BUNuYJUNXNWH8fFhMWHg",
  authDomain: "reactjs-37075-3e3ed.firebaseapp.com",
  projectId: "reactjs-37075-3e3ed",
  storageBucket: "reactjs-37075-3e3ed.appspot.com",
  messagingSenderId: "831115761491",
  appId: "1:831115761491:web:fcaca20f5fb78cd464f3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);