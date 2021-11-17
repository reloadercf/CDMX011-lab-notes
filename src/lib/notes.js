import { useState, useEffect } from 'react';

import {
  collection, addDoc, serverTimestamp, onSnapshot, query,
  where, orderBy, deleteDoc, doc, getDoc, updateDoc,
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

export const useGetNotes = (user) => {
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

export const handleGetNote = async (idDoc) => {
  const docSnap = await getDoc(doc(db, 'notes', idDoc));
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const handleEditNote = async (idDoc, text) => {
  await updateDoc(doc(db, 'notes', idDoc), {
    text,
    data_update: serverTimestamp(),
  });
};
