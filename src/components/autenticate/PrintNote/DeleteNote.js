import PropTypes from 'prop-types';

const DeleteNote = ({ handleDeleteNote, idDoc }) => (<button type="button" onClick={() => { handleDeleteNote(idDoc); }}>Borrar</button>);

DeleteNote.propTypes = {
  handleDeleteNote: PropTypes.func.isRequired,
  idDoc: PropTypes.string.isRequired,
};

export default DeleteNote;
