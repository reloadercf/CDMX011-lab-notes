//import { deleteNote } from "../firebase/firebaseUtils"
export default function ModalDelete(props) {

	return(
		<div className={`modalBackground${props.open && 'Show'}`}>
			<div>
				<span>Are you sure you want to delete this note?</span>
				<button onClick={() => console.log(props.noteData)}>Yas</button>
				<button onClick={props.close}>Naur</button>
			</div>
		</div>
	)
}
