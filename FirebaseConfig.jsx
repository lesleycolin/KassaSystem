// FirebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9zechcCsKIR4905SJK_fVcMuViD36wYM",
  authDomain: "kassasystem-10847.firebaseapp.com",
  projectId: "kassasystem-10847",
  storageBucket: "kassasystem-10847.appspot.com",
  messagingSenderId: "330538265770",
  appId: "1:330538265770:web:7aade56b64f78f377f74d3",
};

let app;
let auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);

  // Initialize Firebase Auth with persistent storage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
}

const db = getFirestore(app);

export { app, db, auth };
