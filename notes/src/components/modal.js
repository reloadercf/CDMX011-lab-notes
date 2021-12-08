import { useState } from "react";
import { deleteNote, updateNote } from "../firebase/firebaseUtils";
import { IoCloseCircle } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { ShowModal } from "../Hooks/showModal";

export default function Modal({data, closeModal, openModal, use}) {

	const {id, title, content, dateEdition} = data;
	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);
	const [open1, openModal1, closeModal1] = ShowModal(false);

	const handleNewTitle = (e) => {
//		console.log(e.target.value);
		setNewTitle(e.target.value);
	};

	const handleNewContent = (e) => {
//		console.log(e.target.value)
		setNewContent(e.target.value);
	};


  return (
    <div className={`modalBackground${openModal && "Show"}`}>
			{use === 'updateNote'
			? <div className='modal'>
					<div className='editContent'>
						<IoCloseCircle onClick={closeModal} style={{ color: "#d68684", fontSize: "35" }} />
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
					<section className='sectionEdit'>
						<span className="modalCount">{newContent.length}</span>
          	<span>/1000</span>
						<h4>Last modified: {dateEdition}</h4>
						<div>
							<MdDelete
								style={{color: '#735360', fontSize: '30'}}
								onClick={openModal1}/>
						</div>
					</section>
					{open1 && <Modal data={data} closeModal={closeModal1} openModal={openModal1} use='deleteData' />}
      	</div>
			: <div className='modalDelete'>
				<p>Are you sure you want to delete this note?</p>
				<section>
					<button onClick={() => deleteNote(id)}>Sure</button>
					<button onClick={closeModal}>Forget it</button>
				</section>
			</div>
		}
    </div>
  );
};


/* onClick={() => deleteNote(id)} */