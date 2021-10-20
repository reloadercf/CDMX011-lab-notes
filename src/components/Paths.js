/* eslint-disable react/prop-types */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Note from './autenticate/Note';
import Login from './noautenticate/Login';
import Signup from './noautenticate/Signup';
import { handleLogin } from '../lib/auth';
import { handleAddNote } from '../lib/notes';

const Paths = ({ isAutenticate }) => (
  <div>
    {isAutenticate ? (
      <Switch>
        <Route exact path="/">
          <Note
            isAutenticate={isAutenticate}
            handleAddNote={handleAddNote}
          />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    )}
  </div>
);

export default Paths;
