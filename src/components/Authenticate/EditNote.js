/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { Link, useParams, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const fragmentStyle = {
  width: '100vw',
  height: '400px',
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
  height: '200px',
};

const submitStyle = {
  backgroundColor: '#0A97FF',
  border: 'none',
  color: 'white',
  marginTop: '50px',
  marginLeft: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  width: '300px',
  height: '30px',
};

const buttonsStyle = {
  display: 'flex',
};

const EditNote = ({ handleGetNote, handleEditNote }) => {
  const [note, setNote] = useState('');
  const { idDoc } = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetNote(idDoc)
      .then((noteResult) => {
        setNote(noteResult.text);
      });
  }, []);

  return (
    <div style={fragmentStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEditNote(idDoc, note).then(() => {
            history.push('/');
          });
        }}
        style={formStyle}
      >
        <textarea style={textAreaStyle} value={note} placeholder="Termina de editar tu nota" onChange={(e) => { setNote(e.target.value); }} />
        <div style={buttonsStyle}>
          <Link to="/"><input style={submitStyle} type="button" value="Cancelar" /></Link>
          <input style={submitStyle} type="submit" value="Guardar" />
        </div>
      </form>
    </div>

  );
};

EditNote.propTypes = {
  handleGetNote: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
};

export default EditNote;
