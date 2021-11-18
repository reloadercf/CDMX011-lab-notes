import React from 'react';

import PropTypes from 'prop-types';

import NoteWall from './NoteWall';

import './style.css';

const PrintNote = ({ isAuthenticate, useGetNotes, handleDeleteNote }) => {
  const notes = useGetNotes(isAuthenticate.uid);

  return (
    <div>
      <p className="text-blue">Mis Notas: </p>
      <div className="container-notes">
        {notes ? notes.map((note) => (
          <NoteWall
            key={note.id}
            data={note.data}
            idDoc={note.id}
            handleDeleteNote={handleDeleteNote}
          />
        )) : null}
      </div>
    </div>

  );
};

PrintNote.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  useGetNotes: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default PrintNote;
