import { useState } from 'react';

import { saveNote } from '../firebase/firebaseUtils';
import { IoSend } from 'react-icons/io5'

export default function AddNote() {
	const [title, setTitle] = useState('');
	const [noteText, setNoteText] = useState('');
	const date = new Date();

	const getNote = (e) => {
		return (e.target.value.length <= 1000)
			? setNoteText(e.target.value)
			: console.log('limit exceeded');
	};

	const getTitle = (e) => {
		setTitle(e.target.value);
		//console.log(e.target.value);
	};

	const sendNote = (e) => {
		if (title !== '' && noteText.length > 0) {
			saveNote(date, title, noteText);
			console.log('sending to firebase');
			setTitle('');
			setNoteText('');
		}
	};

	return (
		<div className='AddNote'>
			<div>
				<input className='title'
					placeholder='Title'
					name='Title'
					value={title}
					onChange={getTitle}
				></input>
				<textarea className='contentNote'
					placeholder='Write something...'
					name='Content'
					value={noteText}
					onChange={getNote}
				></textarea>
			</div>
			<div className='footerNote'>
				<span className='counter'>{noteText.length}</span>
				<span className='limit'>/1000</span>
				<span>
					<IoSend style={{color: '#3E3947', fontSize: '25px'}}
					onClick={() => {
						sendNote();
					}}/>
				</span>
			</div>
		</div>
	);
}
