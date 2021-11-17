import { useState, useEffect } from 'react';

import {
  collection, addDoc, serverTimestamp, onSnapshot, query, where,
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
    const q = query(collection(db, 'notes'), where('user', '==', user));
    onSnapshot(q, (querySnapshot) => {
      const allNotes = [];
      querySnapshot.forEach((doc) => {
        allNotes.push({ data: doc.data(), id: doc.id });
      });
      setNotes(allNotes);
    });
  }, []);
  return notes;
};
