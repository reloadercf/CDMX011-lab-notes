import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Home } from '../pages/Home';
import { Login }  from '../pages/Login';
import { Register } from '../pages/Register';
import { Notes } from '../pages/Notes';

export function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/notes' component={Notes}/>
      </Switch> 
    </BrowserRouter>
  );
}