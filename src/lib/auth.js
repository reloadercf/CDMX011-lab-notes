import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './secret';

export const handleCreateAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const { user } = userCredential;
      console.log(user);
      setTimeout(() => { window.location.href = '/'; }, 500);
    // ...
    })
    .catch((error) => {
    // ..
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};

export const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};

export const handleLogout = () => {
  signOut(auth).then(() => {
    console.log('sesion cerrada');
  }).catch((error) => {
    console.log(error);
  });
};
