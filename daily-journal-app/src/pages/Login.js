import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { emailLogin, logInWithGoogle } from "../lib/auth";

import "../styles/home.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const emailLoginBtn = (e) => {
    e.preventDefault();
    emailLogin(email, password)
      .then(() => {
        console.log("Esto funciona, iniciamos sesión");
        history.push("/notes");
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
      <form id="login">
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
        <button onClick={emailLoginBtn} type="submit" className="log-button">
          Ingresar
        </button>
        <button onClick={gmailLoginBtn} className="log-button">
          Ingresar con Google
        </button>
        <p className="log-link">
          <Link to="/register">¿No tienes cuenta? Regístrate.</Link>
        </p>
      </form>
    </>
  );
}
