import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { emailRegister, logInWithGoogle } from "../lib/auth.js";

import "../styles/home.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const emailRegisterBtn = (e) => {
    e.preventDefault();
    emailRegister(email, password)
      .then(() => {
        console.log("Esto funciona, nos hemos registrado como usuarios");
        history.push("/login");
      })
      .catch((error) => {
        console.log("Hola, no iniciamos sesión");
      });
  };

  const gmailLoginBtn = (e) => {
    e.preventDefault();
    logInWithGoogle()
      .then(() => {
        console.log("Esto funciona, iniciamos sesión");
        history.push("/notes");
      })
      .catch(() => {
        console.log("Hola, no iniciamos sesión");
      });
  };

  return (
    <>
    <div>
        <h1>Daily Journal</h1>
      </div>
      <form id="register">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
          className="log-input"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Contraseña"
          className="log-input"
        ></input>
        <input type="password" placeholder="Confirma tu contraseña" className="log-input"></input>
        <button onClick={emailRegisterBtn} className="log-button">Ingresar</button>
        <button onClick={gmailLoginBtn} className="log-button">Ingresar con Google</button>
        <p className="log-link">
        <Link to="/login">¿Ya tienes cuenta? Ingresa.</Link>
      </p>
      </form>
    </>
  );
}
