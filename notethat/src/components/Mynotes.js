import React, { useState, useEffect } from "react";
import { Note } from "./Note";
import { Modal } from './Modal';
import logo from "../assets/logo.png";
import "./styles/Mynotes.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebaseconfig";
import { db } from "../firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import { Icon } from '@iconify/react';

function Mynotes() {
  const [notes, setNotes] = useState([]);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout(auth);
      history.push("/login");
      console.log("cerre sesion");
    } catch (error) {
      console.log("hay un error");
    }
  };

  useEffect(() => {
    const getNotes =  () =>{
      try{
      
         onSnapshot(collection(db, "notes"), (querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
          });
          setNotes(documents);
        })
      }catch(error){
        console.log(error)
      }
    }
  getNotes()
    
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
 
  const newNote = {title:'' , information:''};

  return (
    <div className="container-mynotes">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="logotype" />
        </Link>
        <button className="btn-heading-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      
        <div className="div-btns">
        <div className="div-my-notes">
          <p>My Notes </p>
          <p>{currentUser.email}</p>
          </div>
          
          <button className="btn-create-note" onClick={showModal}>
            Create  <span className="that-span"> that </span> new note <Icon className="add-icon" icon="ant-design:file-add-outlined" color="#20399f" height="28" />
          </button>
        </div>
     
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
          {
            isVisible && 
            <Modal mode='create' isVisible={isVisible} note={newNote} hideModal={hideModal} />
          }

    </div>
  );
}

export default Mynotes;
