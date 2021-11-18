/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const NoteWall = ({ data, idDoc, handleDeleteNote }) => {
  const { text, data_update, data_create } = data;

  return (
    <div className="note">
      <div className="date">
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
          <button type="button" className="btn-note">Editar</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            handleDeleteNote(idDoc);
          }}
          className="btn-note"
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
