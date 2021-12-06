import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { emailRegister, logInWithGoogle } from "../lib/auth.js";

import "../styles/home.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const emailRegisterBtn = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      emailRegister(email, password)
        .then(() => {
          history.push("/notes");
          console.log("El usuario se ha registrado");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const gmailLoginBtn = (e) => {
    e.preventDefault();
    logInWithGoogle()
      .then(() => {
        console.log("Esto funciona, iniciamos sesión");
        history.push("/notes");
      })
      .catch((error) => {
        console.log("Hola, no iniciamos sesión");
      });
  };

  return (
    <>
      <div className="log-div">
        <div>
          <h1>
            Daily <br /> Journal
          </h1>
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
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            placeholder="Confirma tu contraseña"
            className="log-input"
          ></input>
          <button onClick={emailRegisterBtn} className="log-button">
            Ingresar
          </button>
          <button onClick={gmailLoginBtn} className="log-button">
            Ingresar con Google
          </button>
          <p className="error"> {error} </p>
          <p className="log-link">
            <Link to="/login">¿Ya tienes cuenta? Ingresa.</Link>
          </p>
        </form>
      </div>
    </>
  );
}
