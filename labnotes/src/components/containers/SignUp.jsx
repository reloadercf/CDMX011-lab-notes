import React from "react";
import  logo  from "../../assets/2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="containerLogin">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logoMyNote" />
        </Link>
        <form id="SignUp-form" className="form">
          <input type="email"  placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="error-message"></div>
          <button >SignUp</button>

        </form>
      </div>
    </div>
  );
};
export default SignUp;
