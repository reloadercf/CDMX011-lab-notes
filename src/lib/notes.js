import { useState, useEffect } from 'react';

import {
  collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy, deleteDoc, doc,
} from 'firebase/firestore';

import { db } from './secret';

export const handleAddNote = async (user, text) => {
  await addDoc(collection(db, 'notes'), {
    user,
    text,
    data_create: serverTimestamp(),
    data_update: serverTimestamp(),
  });
};

export const useGetNote = (user) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'notes'), where('user', '==', user), orderBy('data_update', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      const allNotes = [];
      querySnapshot.forEach((document) => {
        allNotes.push({ data: document.data(), id: document.id });
      });
      setNotes(allNotes);
    });
  }, []);
  return notes;
};

export const handleDeleteNote = async (idDoc) => {
  await deleteDoc(doc(db, 'notes', idDoc));
};
