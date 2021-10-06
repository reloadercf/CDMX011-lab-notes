import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./styles/Login.css";
import logo from "../assets/logo.png";
import line from "../assets/line-form.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png"

const Login = ({handleLogin}) => {
    const [email,setEmail]=useState('')
    const [pass, setPass]=useState('')
    return (
        <div className="container">
            <div className="header">
        <img src={logo} alt="logo" className="logotype" />
      </div>
      <div className="form-title">
        <h1 className="title">Log In </h1>
        <p className="slogan">Hurry don't forget <span className="that-span">that</span> idea</p>
      </div>
      <div className="form-content">
      <h4>Email</h4>
           <input type ="text" onChange= {(e)=>{setEmail(e.target.value)}} />
           <h4>Password</h4>
           <input type ="password" onChange= {(e)=>{setPass(e.target.value)}} />
        
           <button className="btn-login" onClick={()=>{handleLogin(email,pass)}}>Log In</button>
           <img src={line} alt="line-form" className="line-form" />
           <div className="social-buttons">
        <button  className="btn-facebook"><img src={facebook} alt="facebook-logo" className="facebook-logo" />Facebbok</button>
        <button className="btn-google"><img src={google} alt="google-logo" className="google-logo" />Google</button>
        </div>
        </div>
           <p>Don't have an account yet? <Link to='/register'>Sign Up</Link></p>
        </div>
    )
}
export default Login