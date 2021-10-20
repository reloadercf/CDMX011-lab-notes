import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/secret';
import Paths from './components/Paths';

const App = () => {
  const [isAutenticate, setIsAutenticate] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAutenticate(user);
    } else {
      setIsAutenticate(null);
    }
  });

  return (
    <BrowserRouter>
      <Paths isAutenticate={isAutenticate} />
    </BrowserRouter>
  );
};

export default App;
