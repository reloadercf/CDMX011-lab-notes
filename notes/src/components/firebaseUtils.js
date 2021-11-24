import { db } from './firebase';

export const saveNote = (title, content) => db.collection('notes').doc().set({
	title,
	content,
});