import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVJTi79xXeIA8aDluI0lSe-UHgOlKalwo",
  authDomain: "daily-jounal.firebaseapp.com",
  projectId: "daily-jounal",
  storageBucket: "daily-jounal.appspot.com",
  messagingSenderId: "809152786591",
  appId: "1:809152786591:web:4dbe2c15d2409bdc22b2aa",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
