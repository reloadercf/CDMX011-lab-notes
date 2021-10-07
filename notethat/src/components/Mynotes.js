import React from 'react';
import logo from "../assets/logo.png";


function Mynotes() {
    return (
        <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logotype" />
      </div>
      <div className="content">
          <button>My Notes</button>
          <button>Create a new note</button>

      </div>
    </div>
    );
}

export default Mynotes;