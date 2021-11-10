import { db } from "./secret";

export const saveNotes = (title, text) =>
  db.collection("Notes").doc().set({
    title,
    text,
  });

export const deleteNotes = (id) => db.collection("Notes").doc(id).delete();
export const showNotes = (data) => db.collection("Notes").onSnapshot(data);

export const editNotes = (id, updatedData) =>
  db.collection("Notes").doc(id).update({
    text: updatedData,
  });

export const getNotes = () => db.collection("Notes");
