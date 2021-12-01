import { db } from './firebase';

export const saveNote = (date, title, content) => db.collection('notes').doc().set({
	date,
	title,
	content,
});

export const getNotes = () => db.collection('notes').orderBy('date', 'asc');

export const deleteNote = (id) => db.collection('notes').doc(id).delete();