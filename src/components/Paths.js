import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import PropTypes from 'prop-types';

import Note from './Authenticate/Note';
import Login from './NoAuthenticate/Login';
import Signup from './NoAuthenticate/Signup';
import EditNote from './Authenticate/EditNote';

import { handleLogin } from '../lib/auth';
import {
  handleAddNote, useGetNotes, handleDeleteNote, handleGetNote, handleEditNote,
} from '../lib/notes';

const Paths = ({ isAuthenticate }) => (
  <div>
    {isAuthenticate ? (
      <Switch>
        <Route exact path="/">
          <Note
            isAuthenticate={isAuthenticate}
            handleAddNote={handleAddNote}
            useGetNotes={useGetNotes}
            handleDeleteNote={handleDeleteNote}
          />
        </Route>
        <Route exact path="/edit/:idDoc">
          <EditNote
            handleGetNote={handleGetNote}
            handleEditNote={handleEditNote}
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

Paths.propTypes = {
  isAuthenticate: PropTypes.object,
};

Paths.defaultProps = {
  isAuthenticate: null,
};

export default Paths;
