/* eslint-disable import/prefer-default-export */
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './secret';

export const handleAddNote = async (user, text) => {
  console.log('click');
  await addDoc(collection(db, 'notes'), {
    user,
    text,
    data_create: serverTimestamp(),
    data_update: serverTimestamp(),
  });
};
