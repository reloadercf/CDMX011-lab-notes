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
        console.log("Esto funciona, iniciamos sesión");
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
      <form id="register">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        ></input>
        <input placeholder="Confirma tu email"></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Contraseña"
        ></input>
        <input placeholder="Confirma tu contraseña"></input>
        <button onClick={emailRegisterBtn}>Ingresar</button>
        <button onClick={gmailLoginBtn}>Ingresar con Google</button>
      </form>
      <p>
        <Link to="/login">¿Ya tienes cuenta? Ingresa.</Link>
      </p>
    </>
  );
}
