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
import { handleAddNote, useGetNote } from '../lib/notes';

const Paths = ({ isAuthenticate }) => (
  <div>
    {isAuthenticate ? (
      <Switch>
        <Route exact path="/">
          <Note
            isAuthenticate={isAuthenticate}
            handleAddNote={handleAddNote}
            useGetNote={useGetNote}
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
