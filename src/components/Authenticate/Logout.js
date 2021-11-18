import PropTypes from 'prop-types';

const logoutStyle = {
  backgroundColor: '#0A97FF',
  color: '#ffffff',
  border: '1px solid #ffffff',
  marginRight: '30px',
};

const Logout = ({ handleLogout }) => (
  <button style={logoutStyle} type="button" onClick={handleLogout}>
    Cerrar sesion
  </button>
);
Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
export default Logout;
