import React from 'react';

import PropTypes from 'prop-types';

import NoteWall from './NoteWall';

const PrintNote = ({ isAuthenticate, useGetNote }) => {
  const notes = useGetNote(isAuthenticate.uid);

  return (
    <div>
      Notas
      {notes ? notes.map((note) => (
        <NoteWall
          data={note.data}
          idDoc={note.id}
          key={note.id}
        />
      )) : null}
    </div>
  );
};

PrintNote.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  useGetNote: PropTypes.func.isRequired,
};

export default PrintNote;
