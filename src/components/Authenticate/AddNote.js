import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ isAuthenticate, handleAddNote }) => {
  const [note, setNote] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddNote(isAuthenticate.uid, note);
      setNote('');
    }}
    >
      <textarea value={note} placeholder="Escribe" onChange={(e) => { setNote(e.target.value); }} />
      <input type="submit" value="Guardar" />
    </form>
  );
};

AddNote.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
};
export default AddNote;
