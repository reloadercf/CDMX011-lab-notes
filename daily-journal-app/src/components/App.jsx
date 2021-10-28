import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import '../styles/home.css'

export function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Daily Journal</h1>
      </div>
      <Switch> 
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch> 
    </BrowserRouter>
  );
}