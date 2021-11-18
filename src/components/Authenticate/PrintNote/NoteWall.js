/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const noteStyle = {
  backgroundColor: '#ffffff',
  width: '80vw',
  height: 'auto',
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: '10px',
};

const dateStyle = {
  fontSize: '15px',
  color: 'darkgrey',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
};

const btnStyle = {
  backgroundColor: '#ffffff',
  color: '#0A97FF',
  border: '1px solid #0A97FF',
  marginRight: '30px',
};

const NoteWall = ({ data, idDoc, handleDeleteNote }) => {
  const { text, data_update, data_create } = data;

  return (
    <div style={noteStyle}>
      <div style={dateStyle}>
        Modificado:
        {data_update.toDate().toDateString()}
        -
        {data_update.toDate().toLocaleTimeString('es-MX')}
      </div>
      <p>
        {text}
      </p>
      <div className="date">
        Creada:
        {data_create.toDate().toDateString()}
        -
        {data_create.toDate().toLocaleTimeString('es-MX')}
      </div>
      <div>
        <Link to={`/edit/${idDoc}`}>
          <button type="button" style={btnStyle}>Editar</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            handleDeleteNote(idDoc);
          }}
          style={btnStyle}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

NoteWall.propTypes = {
  data: PropTypes.object.isRequired,
  idDoc: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};
export default NoteWall;
