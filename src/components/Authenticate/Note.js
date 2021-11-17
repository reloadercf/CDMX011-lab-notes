import PropTypes from 'prop-types';
import AddNote from './AddNote';
import Logout from './Logout';
import PrintNote from './PrintNote/PrintNote';

const Note = ({ isAuthenticate, handleAddNote, useGetNote }) => (
  <div>
    Bienvenido
    <Logout />
    <AddNote isAuthenticate={isAuthenticate} handleAddNote={handleAddNote} />
    <PrintNote isAuthenticate={isAuthenticate} useGetNote={useGetNote} />
  </div>
);

Note.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  useGetNote: PropTypes.func.isRequired,
};

export default Note;
