import React, { useState } from 'react';
import PropTypes from 'prop-types';

const fragmentStyle = {
  width: '100vw',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
};

const formStyle = {
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  width: '25em',
  alignItems: 'center',
};

const textAreaStyle = {
  width: '30em',
  fontFamily: 'Roboto',
  color: 'black',
  fontSize: '16px',
};

const submitStyle = {
  backgroundColor: '#0A97FF',
  border: 'none',
  color: 'white',
  marginTop: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  width: '300px',
  height: '30px',
};

const AddNote = ({ isAuthenticate, handleAddNote }) => {
  const [note, setNote] = useState('');

  return (
    <div style={fragmentStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddNote(isAuthenticate.uid, note);
          setNote('');
        }}
        style={formStyle}
      >
        <textarea style={textAreaStyle} value={note} placeholder="Escribe" onChange={(e) => { setNote(e.target.value); }} />
        <input style={submitStyle} type="submit" value="Guardar" />
      </form>
    </div>
  );
};

AddNote.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
};
export default AddNote;
