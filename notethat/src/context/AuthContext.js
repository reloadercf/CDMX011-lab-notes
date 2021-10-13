import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { auth } from "../firebaseconfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    signOut(auth);
  };

  const updateName = (displayUserName) => {
    return updateProfile(auth.currentUser, {displayName: displayUserName});
  }
 

const loginGoogle=()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
} 

  const value = { signup, login, logout, currentUser, updateName, loginGoogle };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
