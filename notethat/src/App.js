import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Mynotes from "./components/Mynotes";
import Home from "./components/Home";
import { createAccount } from "./firebaseconfig";
import { loginAccount } from "./firebaseconfig";

function App() {
  const handleRegister = (email, password) => {
    createAccount(email, password);
  };
  const handleLogin = (email, password) => {
    loginAccount(email, password);
  };
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={Home}></Route>
        <Route path='/register'><Register handleRegister={handleRegister} /></Route>
        <Route path='/login'><Login handleLogin={handleLogin} /></Route>
        <Route path='/notes' component={Mynotes}></Route>
        
      </Switch>
    </div>
  </Router>
  );
}
export default App;