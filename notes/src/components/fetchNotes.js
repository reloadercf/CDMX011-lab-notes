import { useState, useEffect } from "react";
import { getNotes } from "../firebase/firebaseUtils";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ModalDelete from "./modalDelete";
import { ShowModal } from "../Hooks/showModal";
import AddNote from "./addNote";

export default function FetchData() {
  const [notes, setNotes] = useState([]);
  //	const [modal, setModal] = useState(false);

  const [open, openModal, closeModal] = ShowModal(false);

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

  return (
    <div className="divData">
      {notes.map((item) => (
        <section key={item.id} className="Note">
          <h1>{item.title}</h1>
          <pre>{item.content}</pre>
          <footer>
            <RiDeleteBin6Fill
              onClick={openModal}
              noteid={item.id}
              style={{ fontSize: "25px" }}
            />
          </footer>
        </section>
      ))}
      <AddNote />
		  <ModalDelete open={open} close={closeModal} noteData={notes.map((note) => note.id)} />
    </div>
  );
}

/* */
/* <ModalDelete open={open} close={closeModal} noteData={item.id} /> */
