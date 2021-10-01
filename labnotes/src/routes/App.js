import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";

import Home from "../components/containers/Home";
import Login from "../components/containers/Login";
import SignUp from "../components/containers/SignUp";
import NotFound from "../components/containers/NotFound";

import { AuthProvider } from "../context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/SignUp" component={SignUp}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};
export default App;
