//import './App.css';
import React from "react";

import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

function App() {
  return (
		<Router>
   		<div className="App">
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
    	</div>
		</Router>
  );
}

export default App;
