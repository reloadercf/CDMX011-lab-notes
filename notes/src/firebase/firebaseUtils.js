import firebase from "firebase/app";
import { db, auth } from "./firebase";

export const saveNote = (date, title, content) =>
  db.collection("notes").doc().set({
    date,
    dateEdition: "",
    title,
    content,
  });

export const getNotes = () => db.collection("notes").orderBy("date", "desc");

export const deleteNote = (id) => db.collection("notes").doc(id).delete();

export const updateNote = async (id, title, content) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  try {
    await db
      .collection("notes")
      .doc(id)
      .update({
        id: id,
        title: title,
        content: content,
        dateEdition: new Date().toLocaleString("en-US", options),
      });
    //		return console.log('Document successfully updated!');
  } catch (error) {
    return console.log("Error updating document: ", error);
  }
};

export const authGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());