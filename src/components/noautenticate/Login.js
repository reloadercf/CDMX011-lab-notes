import React, { useState } from 'react';
import { handleLogin } from '../../lib/auth';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div>
      <input type="email" placeholder="correo" onChange={(e) => { setEmail(e.target.value); }} />
      <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
      <button type="submit" onClick={() => { handleLogin(email, password); }}> Iniciar sesion </button>
    </div>
  );
};

export default Login;
