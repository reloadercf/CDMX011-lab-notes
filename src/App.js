import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { handleCreateAccount } from './lib/auth';
import Paths from './components/Paths';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAutenticate, setIsAutenticate] = useState(null);
  return (
    <BrowserRouter>
      <Paths isAutenticate={isAutenticate} />
    </BrowserRouter>
  );
};

export default App;
