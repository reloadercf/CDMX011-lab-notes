import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Here's gonna be the signup form</h1>
				<Link to='/'>
				<button>Ir al home</button>
				</Link>
      </div>
    );
  }
}