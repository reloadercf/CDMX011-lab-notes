/* eslint-disable react/prop-types */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Note from './Authenticate/Note';
import Login from './NoAuthenticate/Login';
import Signup from './NoAuthenticate/Signup';
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
