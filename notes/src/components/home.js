import React from 'react';

import { Link } from 'react-router-dom';
import '../index.css';
import Note from './note';

export default function Home(){
	//const [note, setNote] = useState('');

/* 	const addNote = (content) => {
		console.log(content);
	} */
	//const sendNote

	//hacer funcion dispare nuevo componente
	//use effect

    return (
      <div className='background'>
				<h1 className='echo'>echo;</h1>
				<Link to='/login'>
				<button className='buttonExit'>Ir al login</button>
				</Link>
				<div className='notes'>
					{/* <div>Hijo</div>
					<div>Hijo</div>
					<div>Hijo</div> */}
					<Note />
				</div>
      </div>
    );
  }