import PropTypes from 'prop-types';
import AddNote from './AddNote';
import PrintNote from './PrintNote/PrintNote';

const Note = ({
  isAuthenticate, handleAddNote, useGetNotes, handleDeleteNote,
}) => (
  <div>
    <AddNote
      isAuthenticate={isAuthenticate}
      handleAddNote={handleAddNote}
    />

    <PrintNote
      isAuthenticate={isAuthenticate}
      useGetNotes={useGetNotes}
      handleDeleteNote={handleDeleteNote}
    />
  </div>
);

Note.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  useGetNotes: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default Note;
