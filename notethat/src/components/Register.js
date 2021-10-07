import React, { useState } from "react";
import { Link,useHistory  } from 'react-router-dom';
import "./styles/Register.css";
import logo from "../assets/logo.png";
import line from "../assets/line-form.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png"
import {useAuth} from '../context/AuthContext';

const Register = () => {
  const {signup} = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleRegister = async ()=>{ 
    try{
      await signup(email, pass)
      console.log('me registreee')
      history.push('/mynotes')
    }catch(error){
     console.log(error)
     console.log('hay un errorrrrr')
    }
 }

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logotype" />
      </div>
      <div className="form-title">
        <h1 className="title">Sign Up</h1>
        <p className="slogan">Start saving <span className="that-span">that</span> idea</p>
      </div>
      <div className="form-content">
        <h4>Name</h4>
          <input type="text" />
        <h4>Email</h4>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        <h4>Password</h4>
          <input
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <h4>Confirm Password</h4>
          <input type="password" />
        <button className="btn-register"
          onClick={() => {
            handleRegister(email, pass);
          }}
        >
          Registrate
        </button>
        <img src={line} alt="line-form" className="line-form" />
        <div className="social-buttons">
        <button  className="btn-facebook"><img src={facebook} alt="facebook-logo" className="facebook-logo" />Facebbok</button>
        <button className="btn-google"><img src={google} alt="google-logo" className="google-logo" />Google</button>
        </div>
      </div>
      
      <p className="link-to">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};
export default Register;
