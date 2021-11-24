import { useState } from 'react';

import { saveNote } from './firebaseUtils';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
	 const [title, setTitle] = useState('');
	 const [noteText, setNoteText] = useState('');

	 const getNote = (e) => {
		 if(e.target.value.length <= 1000){
			 setNoteText(e.target.value);
		 } else {
			 	console.log('limit exceeded');
		 }
	 }

	 const getTitle = (e) => {
		 setTitle(e.target.value);
		 console.log(e.target.value);
	 }

	 const sendNote = (e) => {
		 if(title !== '' && noteText.length > 0){
					saveNote(title, noteText);
		 			console.log('sending to firebase');
					setTitle('');
					setNoteText('');
		 }
	 }

	return(
		<div className='Note'>
			<div>
				<input className='title'
					placeholder='Title'
					name='Title'
					value={title}
					onChange={getTitle}
				></input>
				<textarea className='contentNote'
					placeholder='write something'
					name='Content'
					value={noteText}
					onChange={getNote}
					//onKeyUp={}
					></textarea>
			</div>
			<div className='footerNote'>
				<span className='counter'>{noteText.length}</span>
				<span className='limit'>/1000</span>
				<button
					className='btnSaveNote'
					onClick={(e)=>{
						sendNote()
					}}
					>save</button>
				<MdDeleteForever />
			</div>
		</div>
	)
}

export default Note;