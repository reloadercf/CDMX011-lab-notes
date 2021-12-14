import React from "react";

import "./styles/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/signup";
import Home from "./views/home/home";

function App() {
  return (
    <Router>
      <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
