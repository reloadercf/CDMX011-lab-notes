import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX9Z0D8z5BMaXkN290Vlf-GK1u9PYRu1Y",
  authDomain: "labnotesreact.firebaseapp.com",
  projectId: "labnotesreact",
  storageBucket: "labnotesreact.appspot.com",
  messagingSenderId: "458502185580",
  appId: "1:458502185580:web:c33a22a4b224f76d9f6e49",
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

