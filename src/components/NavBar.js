import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Logout from './Authenticate/Logout';

const navBarStyle = {
  listStyleType: 'none',
  margin: '0',
  padding: '10px',
  width: '100%',
  height: '40px',
  backgroundColor: '#0A97FF',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  justifyContent: 'space-between',
};

const logo = {
  textDecoration: 'none',
  color: '#fff',
};

const NavBar = ({ isAuthenticate, handleLogout }) => (
  <div style={navBarStyle}>
    <h2><Link to="/" style={logo}>Labnotes</Link></h2>
    {isAuthenticate && <div>{isAuthenticate.email}</div>}
    {isAuthenticate && <Logout handleLogout={handleLogout} />}
  </div>
);

NavBar.propTypes = {
  isAuthenticate: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
export default NavBar;
