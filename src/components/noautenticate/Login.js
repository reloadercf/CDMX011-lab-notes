import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(email, password);
    }}
    >
      <input type="email" placeholder="correo" onChange={(e) => { setEmail(e.target.value); }} />
      <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
      <input type="submit" value="Iniciar Sesion" />
    </form>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
