import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0P3cEqPR4GNULZzLH9dSydolU3Kl49NU",
  authDomain: "hr-mvp-1b7f5.firebaseapp.com",
  projectId: "hr-mvp-1b7f5",
  storageBucket: "hr-mvp-1b7f5.appspot.com",
  messagingSenderId: "352459148466",
  appId: "1:352459148466:web:33fc78b5d9fd85489a0dab",
  measurementId: "G-RG9HMNS0HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();