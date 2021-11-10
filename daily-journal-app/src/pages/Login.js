import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../styles/home.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory;

  return (
    <>
      <form id="login">
        <input placeholder="Email"></input>
        <input placeholder="Contraseña"></input>
        <button>Ingresar</button>
        <button>Ingresar con Google</button>
      </form>
    </>
  );
}
