import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDnpSNXYfDKKHXNSns6AD0w1Akmq5DAJhw",
  authDomain: "note-that.firebaseapp.com",
  projectId: "note-that",
  storageBucket: "note-that.appspot.com",
  messagingSenderId: "165534425727",
  appId: "1:165534425727:web:f4582439e10ec7444a154a"
  };
 initializeApp(firebaseConfig);

 
 export const createAccount =(email,password)=>{ 
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  console.log(user);
  console.log('bien')
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  //const errorMessage = error.message;
  console.log(errorCode);
  console.log('Mal')
  // ..
});
}

export const loginAccount =(email,password)=>{ 
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    console.log('inicie sesion')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    console.log('no inicie sesion')
  });
}
