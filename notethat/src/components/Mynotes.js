import React from "react";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {auth} from '../firebaseconfig'

function Mynotes() {
    const { currentUser,logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
       try{
        await logout(auth)
        history.push('/')
        console.log('cerre sesion')
       }catch(error){
        console.log('hay un error')
       }
      };


  return (
    <div className="container-mynotes">
      <div className="header">
        <img src={logo} alt="logo" className="logotype" />
        <button className="btn-register"  onClick={handleLogout}>Log Out</button>
      </div>
      <div className="content">
        <button>My Notes</button>
        <button>Create a new note</button>
        <h1>Welcome</h1>
        <p>{currentUser.email}</p>
      </div>
    </div>
  );
}

export default Mynotes;
