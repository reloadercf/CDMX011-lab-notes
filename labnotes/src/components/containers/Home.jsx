import React, { useState } from "react";
import iconLogout from '../../assets/icons8-salida-64.png'
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../../firebase";

const Home = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  const handleLogout = async () => {
    try {
      await logout(auth);
     history.push('/');
    } catch (error) {
      setError("error");
    }
  };
  
  return (
    <div className="contentNotes">
    <div className='navBar'>
    <img src={iconLogout} alt="iconlogout" className="icon" />
    <Link to="/" onClick={handleLogout}>Sign Off</Link>
    </div>
      <div className="error">
        {error && <p className="error-message">{error}</p>}
      </div>
      <h1>Hi</h1>
      <p>{currentUser.email}</p>
    </div>
  );
};
export default Home;
