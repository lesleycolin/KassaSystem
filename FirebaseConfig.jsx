// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zechcCsKIR4905SJK_fVcMuViD36wYM",
  authDomain: "kassasystem-10847.firebaseapp.com",
  projectId: "kassasystem-10847",
  storageBucket: "kassasystem-10847.appspot.com",
  messagingSenderId: "330538265770",
  appId: "1:330538265770:web:7aade56b64f78f377f74d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
