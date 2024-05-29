// FirebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9zechcCsKIR4905SJK_fVcMuViD36wYM",
  authDomain: "kassasystem-10847.firebaseapp.com",
  projectId: "kassasystem-10847",
  storageBucket: "kassasystem-10847.appspot.com",
  messagingSenderId: "330538265770",
  appId: "1:330538265770:web:7aade56b64f78f377f74d3",
};

const initializeFirebaseApp = () => {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  } else {
    return getApps()[0];
  }
};

const app = initializeFirebaseApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
