import { useState } from "react";
import { deleteNote, updateNote } from "../../firebase/firebaseUtils";
import { IoCloseCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { ShowModal } from "../../Hooks/showModal";

export default function Modal({ data, closeModal, openModal, use }) {
  const { id, title, content, dateEdition } = data;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [openInternal, openModalInternal, closeModalInternal] =
    ShowModal(false);

  const handleNewTitle = (e) => {
    //console.log(e.target.value);
    setNewTitle(e.target.value);
  };

  const handleNewContent = (e) => {
    return e.target.value <= 1000
      ? setNewContent(e.target.value)
      : console.log("limited exceeded");
  };

  return (
    <div className={`modalBackground${openModal && "Show"}`}>
      {use === "updateNote" ? (
        <div className="modal">
          <div className="editContent">
            <IoCloseCircle
              onClick={closeModal}
              style={{ color: "#d68684", fontSize: "35" }}
            />
          </div>
          <input
            onChange={handleNewTitle}
            value={newTitle}
            onKeyUp={() => updateNote(id, newTitle, newContent)}
          />
          <textarea
            onChange={handleNewContent}
            value={newContent}
            onKeyUp={() => updateNote(id, newTitle, newContent)}
          />
          <section className="sectionEdit">
            <span className="modalCount">{newContent.length}</span>
            <span>/1000</span>
            <h4>{dateEdition === "" ? "" : `Last modified: ${dateEdition}`}</h4>
            <div>
              <MdDelete
                style={{ color: "#735360", fontSize: "30" }}
                onClick={openModalInternal}
              />
            </div>
          </section>
          {openInternal && (
            <Modal
              data={data}
              closeModal={closeModalInternal}
              openModal={openModalInternal}
              use="deleteData"
            />
          )}
        </div>
      ) : (
        <div className="modalDelete">
          <p>
            Delete <strong>forever?</strong> Be completely sure, you're never
            seeing this again
          </p>
          <section>
            <button onClick={() => deleteNote(id)}>Sure</button>
            <button onClick={closeModal}>Forget it</button>
          </section>
        </div>
      )}
    </div>
  );
}
