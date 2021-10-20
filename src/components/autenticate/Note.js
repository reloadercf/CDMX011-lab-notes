import PropTypes from 'prop-types';
import AddNote from './AddNote';
import Logout from './Logout';

const Note = ({ isAutenticate, handleAddNote }) => (
  <div>
    Bienvenido
    <Logout />
    <AddNote isAutenticate={isAutenticate} handleAddNote={handleAddNote} />
  </div>
);

Note.propTypes = {
  isAutenticate: PropTypes.object.isRequired,
  handleAddNote: PropTypes.func.isRequired,
};

export default Note;
