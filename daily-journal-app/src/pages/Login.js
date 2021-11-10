import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { emailLogin, logInWithGoogle } from "../lib/auth";

import "../styles/home.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLoginBtn = (e) => {
    e.preventDefault();
    emailLogin(email, password)
      .then(() => {
        console.log("Esto funciona, iniciamos sesión");
        useHistory.push("/notes");
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
        useHistory.push("/notes");
      })
      .catch(() => {
        console.log("Hola, no iniciamos sesión");
      });
  };

  return (
    <>
      <form id="login">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Contraseña"
        ></input>
        <button onClick={emailLoginBtn} type="submit">
          Ingresar
        </button>
        <button onClick={gmailLoginBtn}>Ingresar con Google</button>
      </form>
      <p>
        <Link to="/register">¿No tienes cuenta? Regístrate.</Link>
      </p>
    </>
  );
}
