import { useState, useEffect } from "react";
import { logOut } from "../lib/auth.js";
import { saveNotes, deleteNotes } from "../lib/firestore.js";
import { useHistory } from "react-router-dom";
import Note from "./Note.js";

import "../styles/home.css";
import { db } from "../lib/secret.js";

export function Notes() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const history = useHistory();

  const submitNote = (e) => {
    e.preventDefault();
    saveNotes(title, text).then(() =>
      console.log("Hola, enviando nota a Firestore")
    );
  };

  const logoutBtn = (e) => {
    e.preventDefault();
    logOut();
    history.push("/login");
  };

  const getNotes = () => {
    db.collection("Notes").onSnapshot((data) => {
      const docs = [];
      data.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs);
      console.log(docs);
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="logout-div">
        <button onClick={logoutBtn} className="logout-btn"></button>
      </div>
      <div className="input-note">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Título de la nota"
          className="note-input-title"
        ></input>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Texto de la nota"
          className="note-input-text"
        ></input>
        <button onClick={submitNote} type="submit" className="log-button">
          Guardar nota
        </button>
      </div>
      <br />
      <div className="container-master">
        {notes.map((notes) => (
          <Note notes={notes} key={notes.id} deleteNotes={deleteNotes} />
        ))}
      </div>
    </>
  );
}
