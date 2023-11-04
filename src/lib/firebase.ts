// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "aideation-yt-5ce79.firebaseapp.com",
  projectId: "aideation-yt-5ce79",
  storageBucket: "aideation-yt-5ce79.appspot.com",
  messagingSenderId: "860950343384",
  appId: "1:860950343384:web:f9665f200ba1f10b15b1ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);