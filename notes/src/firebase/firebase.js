import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJNXNlq4vsC55L-YbnvQ0ez35droThnO8",
  authDomain: "labnotes-2021.firebaseapp.com",
  projectId: "labnotes-2021",
  storageBucket: "labnotes-2021.appspot.com",
  messagingSenderId: "245929639972",
  appId: "1:245929639972:web:d7c538290bebfba27c58b1",
  measurementId: "G-KST0QQCG76"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
