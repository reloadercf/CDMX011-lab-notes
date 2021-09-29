import React from "react";
import "../../Styles/Login.css";
import logo from "../../assets/2.png";
import iconGoogle from "../../assets/iconGoogle.png";
import iconFacebook from "../../assets/iconFacebook.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="containerLogin">
      <div className="logo">
        <img src={logo} alt="logoMyNote" />
      </div>
      <div className="login-content">
        <form id="login-form" className="form">
          <input type="email" id="loginEmail" placeholder="Email" />
          <input type="password" id="loginPassword" placeholder="Password" />
          <div className="error-message" id="loginMessages"></div>
          <button id="btnLogin">Login</button>

          <div className="login-google">
            <img src={iconGoogle} alt="logo google" className="icon" />
            <Link to="/Home">Login with Google</Link>
          </div>
          <div className="login-facebook">
            <img src={iconFacebook} alt="logo facebook" className="icon" />
            <Link to="/Home">Login with Facebook</Link>
          </div>
          <div className="footerForm">
            <Link to="/SignUp">You do not have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
