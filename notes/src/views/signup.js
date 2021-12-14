import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { authGoogle } from "../firebase/firebaseUtils";


export default function Signup() {

	let history = useHistory();

	const googleAuth = () => {
		authGoogle()
		.then((res) => {
			console.log(res)
			history.push('/')
		})
		.catch((err) => console.log(err))
	}

  return (
    <div>
      <div>
        <span>etce</span>
        <span>&</span>
        <span>tera</span>
      </div>
      <div>
        <h1>All your thoughts in one place</h1>
        <button onClick={googleAuth}>Sign in with Google</button>
				<Link to='/'>
					<button>Ir al home (provisional)</button>
				</Link>
      </div>
    </div>
  );
}
