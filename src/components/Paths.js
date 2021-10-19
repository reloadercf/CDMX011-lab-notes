import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Note from './autenticate/Note';
import Login from './noautenticate/Login';
import Signup from './noautenticate/Signup';

// eslint-disable-next-line react/prop-types
const Paths = ({ isAutenticate }) => (
  <div>
    {isAutenticate ? (
      <Switch>
        <Route exact path="/">
          <Note />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    )}
  </div>
);

export default Paths;
