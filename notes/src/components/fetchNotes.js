import { useState, useEffect } from "react";
import { getNotes } from "../firebase/firebaseUtils";
import { RiDeleteBin6Fill } from 'react-icons/ri';
import AddNote from "./addNote";
import { deleteNote } from "../firebase/firebaseUtils";

export default function FetchData() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    getNotes().onSnapshot((data) => {
      const doc = [];
      data.forEach((item) => {
        doc.push({ ...item.data(), id: item.id });
      });
      console.log(doc);
      setNotes(doc);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

	return(
		<div className='divData'>{notes.map((item) => (
			<section key={item.id} className='Note'>
				<h1>{item.title}</h1>
				<pre>{item.content}</pre>
				<footer>
					<RiDeleteBin6Fill onClick={() => {
						deleteNote(item.id)
					}}
						style={{fontSize: '22px'}} />
				</footer>
			</section>
		))}
			<AddNote />
		</div>
	);
}
