import React from 'react';

import PropTypes from 'prop-types';

import NoteWall from './NoteWall';

const PrintNote = ({ isAuthenticate, useGetNotes, handleDeleteNote }) => {
  const notes = useGetNotes(isAuthenticate.uid);

  return (
    <div>
      Notas
      {notes ? notes.map((note) => (
        <NoteWall
          key={note.id}
          data={note.data}
          idDoc={note.id}
          handleDeleteNote={handleDeleteNote}
        />
      )) : null}
    </div>
  );
};

PrintNote.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  useGetNotes: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default PrintNote;
