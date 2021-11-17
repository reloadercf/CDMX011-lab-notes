import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const NoteWall = ({ data, idDoc, handleDeleteNote }) => {
  const { text } = data;
  return (
    <div>
      <p>
        {text}
      </p>
      <Link to={`/edit/${idDoc}`}>
        <button type="button">Editar</button>
      </Link>
      <button
        type="button"
        onClick={() => {
          handleDeleteNote(idDoc);
        }}
      >
        Borrar
      </button>
    </div>
  );
};

NoteWall.propTypes = {
  data: PropTypes.object.isRequired,
  idDoc: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};
export default NoteWall;
