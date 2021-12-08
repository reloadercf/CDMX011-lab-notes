import { useState, useEffect } from "react";
import { getNotes } from "../firebase/firebaseUtils";
//import { RiDeleteBin6Fill } from 'react-icons/ri';
//import { RiEditBoxFill } from 'react-icons/ri';
import AddNote from "./addNote";
import { Note } from "./note";

export default function FetchData() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    getNotes().onSnapshot((data) => {
      const doc = [];
      data.forEach((item) => {
        doc.push({ ...item.data(), id: item.id });
      });
//      console.log(doc);
      setNotes(doc);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

	return(
		<div className='divData'>
			{notes.map((item) => (
			<Note key={item.id} data={item} />
		))}
			<AddNote />
		</div>
	);
}