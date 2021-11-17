import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/secret';
import Paths from './components/Paths';

const App = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticate(user);
    } else {
      setIsAuthenticate(null);
    }
  });

  return (
    <BrowserRouter>
      <Paths isAuthenticate={isAuthenticate} />
    </BrowserRouter>
  );
};

export default App;
