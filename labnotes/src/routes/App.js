import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/containers/Home';
import Login from '../components/containers/Login';
import SignUp from '../components/containers/SignUp';
import NotFound from '../components/containers/NotFound';

const App = () =>{
return(
<BrowserRouter>
    <Switch>
    <Route exact path='/' component= {Login}></Route>
    <Route exact path='/SignUp' component= {SignUp}></Route>
    <Route exact path='/Home' component= {Home}></Route>
    <Route component= {NotFound}></Route>
    </Switch>
</BrowserRouter>
);
};
export default App