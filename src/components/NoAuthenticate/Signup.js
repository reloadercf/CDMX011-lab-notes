import { useState } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Signup = ({ handleCreateAccount }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateAccount(email, password);
      }}
      >
        <input type="email" placeholder="correo" onChange={(e) => { setEmail(e.target.value); }} />
        <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
        <input type="submit" value="Registrar" />
      </form>
      <Link to="/signup">Inicia Sesion</Link>
    </>
  );
};
Signup.propTypes = {
  handleCreateAccount: PropTypes.func.isRequired,
};
export default Signup;
