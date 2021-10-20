import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ isAutenticate, handleAddNote }) => {
  const [note, setNote] = useState('');
  console.log(isAutenticate, note);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddNote(isAutenticate.uid, note);
    }}
    >
      <textarea placeholder="Escribe" onChange={(e) => { setNote(e.target.value); }} />
      <input type="submit" value="Guardar" />
    </form>
  );
};

AddNote.propTypes = {
  isAutenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
};
export default AddNote;
