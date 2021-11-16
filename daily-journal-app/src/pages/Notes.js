import { useState } from "react";
import { logOut } from "../lib/auth";
import { saveNotes } from "../lib/firestore";
import { useHistory } from "react-router-dom";

import "../styles/notes.css";

export function Notes() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

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

  return (
    <>
      <button onClick={logoutBtn}>Cerrar sesión</button>
      <form>
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
        <button onClick={submitNote} type="submit">
          Publicar
        </button>
      </form>
    </>
  );
}
