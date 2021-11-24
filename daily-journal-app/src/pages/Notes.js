import { useState, useEffect } from "react";
import { logOut } from "../lib/auth.js";
import { saveNotes, deleteNotes } from "../lib/firestore.js";
import { useHistory } from "react-router-dom";
import Note from "./Note.js";
import logoutIcon from "../components/logoutIcon.jsx";

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
      <logoutIcon />
      <button onClick={logoutBtn} className="wall-btn">
        Cerrar sesión
      </button>
      <div className="input-note">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Título de la nota"
        ></input>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Texto de la nota"
        ></input>
        <button onClick={submitNote} type="submit" className="wall-btn">
          Publicar
        </button>
      </div>
      <br />
      <div>
        {notes.map((notes) => (
          <Note notes={notes} key={notes.id} deleteNotes={deleteNotes} />
        ))}
      </div>
    </>
  );
}
