import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUMGAfr3NYYyzjl9f4I896RVqZi9hQAWo",
  authDomain: "mynotes-labnotes.firebaseapp.com",
  databaseURL: "https://mynotes-labnotes-default-rtdb.firebaseio.com",
  projectId: "mynotes-labnotes",
  storageBucket: "mynotes-labnotes.appspot.com",
  messagingSenderId: "716240941450",
  appId: "1:716240941450:web:44e22ae645a2f9610b5873"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();



