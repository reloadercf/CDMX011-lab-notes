import React from 'react';

import PropTypes from 'prop-types';

import NoteWall from './NoteWall';

const pBlue = {
  color: '#0A97FF',
  paddingLeft: '30px',
};

const containerStyle = {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginLeft: '-50px',
};

const PrintNote = ({ isAuthenticate, useGetNotes, handleDeleteNote }) => {
  const notes = useGetNotes(isAuthenticate.uid);

  return (
    <div>
      <p style={pBlue}>Mis Notas: </p>
      <div style={containerStyle}>
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
