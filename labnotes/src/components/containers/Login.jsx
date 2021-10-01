import React, { useState } from "react";
import "../../Styles/Login.css";
import logo from "../../assets/2.png";
import iconGoogle from "../../assets/iconGoogle.png";
import { Link, useHistory } from "react-router-dom";
import "../../Styles/App.css";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login, loginGoogle } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      await loginGoogle(email, password);

      history.push("/Home");
    } catch (error) {
      setError("Wrong Credentials");
      setTimeout(()=> setError(''), 1500);
    }
  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <img src={logo} alt="logoMyNote" />
      </div>
      <div className="login-content">
        <form onSubmit={handleSubmit} className="form">
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          {error && <p className="error">{{ error }}</p>}
          <button type="submit">Login</button>
          <div className="login-google">
            <img src={iconGoogle} alt="logo google" className="icon" />
            <Link to="/Home" type="submit">
              Login with Google
            </Link>
          </div>
        </form>
        <div className="footerForm">
          <Link to="/SignUp">You do not have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
