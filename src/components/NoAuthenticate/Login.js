import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const fragmentStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const h2Style = {
  color: '#0A97FF',
};

const formStyle = {
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  marginTop: '25px',
  width: '25em',
  alignItems: 'center',
};
const inputStyle = {
  outline: '0',
  borderWidth: ' 0 0 2px',
  borderColor: '#0A97FF',
  paddingTop: '30px',
  marginTop: '30px',
  width: '400px',
  fontSize: '16px',
};

const submitStyle = {
  backgroundColor: '#0A97FF',
  border: 'none',
  color: 'white',
  marginTop: '150px',
  padding: '15px 32px ',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  width: '300px',
};

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div style={fragmentStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}
        style={formStyle}
      >
        <h2 style={h2Style}>Login</h2>
        <input style={inputStyle} type="email" placeholder="correo" onChange={(e) => { setEmail(e.target.value); }} />
        <input style={inputStyle} type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
        <input style={submitStyle} type="submit" value="Iniciar Sesion" />
        <p>o</p>
        <Link to="/signup">Regístrate ahora</Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
