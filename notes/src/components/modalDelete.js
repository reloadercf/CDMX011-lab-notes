//import { deleteNote } from "../firebase/firebaseUtils"

export default function ModalDelete(props) {


  return (
    <div className={`modalBackground${props.open && "Show"}`}>
      <div className='modal'>
        <span>Are you sure you want to delete this note?</span>
				<section>
					<button onClick={() => console.log(props.noteData)}>Yep</button>
        	<button onClick={props.close}>Forget it</button>
				</section>
      </div>
    </div>
  );
}
