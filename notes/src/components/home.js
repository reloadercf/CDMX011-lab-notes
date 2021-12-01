//import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
//import '../styles/index.css';
import "../styles/index.scss";
//import AddNote from './addNote';
import FetchNotes from "./fetchNotes";
import { BiExit } from "react-icons/bi";

export default function Home() {
  return (
    <div className="background">
      <section className="upper">
        <h1 className="logo">&cetera</h1>
        <span>
          <Link to="/login">
            <BiExit style={{ color: "white", fontSize: "47px" }} />
          </Link>
        </span>
      </section>
      <hr />
      <div className="notesDiv">
        <FetchNotes />
      </div>
    </div>
  );
}

/* 	<img alt='log out the app'
					src='https://firebasestorage.googleapis.com/v0/b/labnotes-2021.appspot.com/o/outline_exit_to_app_white_24dp.png?alt=media&token=14a0aa84-2d0e-4224-a325-73bef941b839'
					className='buttonExit'/> */
