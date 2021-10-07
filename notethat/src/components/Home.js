import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="container">
    <div className="header">
        <Link to="/"><img src={logo} alt="logo" className="logotype" /></Link>
      <button ><Link to="/register"> Sign Up </Link>
      </button>
      <button ><Link to="/register"> Log In </Link>
        
      </button>
    </div>
    <div className="form-title">
      <h1 className="title">Don’t loose that great idea.</h1>
      <p className="slogan">
      Create a space of your own</p>
      <button>
      Sign up now for free
      </button>
    </div>
    <div className="form-content">
    <p className="link-to">
    Help the enviroment by using less paper and use Note That!
    </p>
      
      </div>

  </div>
  );
}

export default Home;
