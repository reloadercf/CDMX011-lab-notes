import { auth, provider } from "./secret.js";

// Email register
export const emailRegister = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Login with Google
export const logInWithGoogle = () => auth.signInWithPopup(provider);

// Login with an email
export const emailLogin = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Logout code
export const logOut = () => auth.signOut();
