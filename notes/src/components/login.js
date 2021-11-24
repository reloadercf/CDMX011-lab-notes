import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//no hacer modales
//usar puro className

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Here's the login</h1>
				<Link to='/'>
				<button>Ir al home</button>
				</Link>
				<Link to='/signup'>
				<button>Register</button>
				</Link>
      </div>
    );
  }
}