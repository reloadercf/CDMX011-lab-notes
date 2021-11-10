import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX2aq8YzZfn0UHza3VcgLVUHemHhEKSLc",
  authDomain: "daily-journal-bd158.firebaseapp.com",
  projectId: "daily-journal-bd158",
  storageBucket: "daily-journal-bd158.appspot.com",
  messagingSenderId: "489365538960",
  appId: "1:489365538960:web:899464486d293a52deb015",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
