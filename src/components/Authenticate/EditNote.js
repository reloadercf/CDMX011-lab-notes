/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { Link, useParams, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

const EditNote = ({ handleGetNote, handleEditNote }) => {
  const [note, setNote] = useState('');
  const { idDoc } = useParams();

  useEffect(() => {
    handleGetNote(idDoc)
      .then((noteResult) => {
        setNote(noteResult.text);
      });
  }, []);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleEditNote(idDoc, note);
      setTimeout(() => { window.location.href = '/'; }, 500);
    }}
    >
      <textarea value={note} placeholder="Escribe" onChange={(e) => { setNote(e.target.value); }} />
      <Link to="/"><input type="button" value="Cancelar" /></Link>
      <input type="submit" value="Guardar" />
    </form>
  );
};

EditNote.propTypes = {
  handleGetNote: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
};

export default EditNote;
