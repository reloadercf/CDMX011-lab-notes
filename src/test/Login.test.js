import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/NoAuthenticate/Login'

import {
    Route,BrowserRouter
  } from 'react-router-dom';

test('Add Note', () =>{
    const handleLogin = jest.fn();

    render(<BrowserRouter><Route><Login handleLogin={handleLogin} /></Route></BrowserRouter>);
    const buttonSubmit= screen.getByRole('button', { name: /Iniciar Sesion/i })
    const inputEmail = screen.getByPlaceholderText('correo')
    const inputPass = screen.getByPlaceholderText('password')

    expect(buttonSubmit).toBeInTheDocument();

    fireEvent.change(inputEmail, {
        target: {value:'correo@correo.com'}
    })

    fireEvent.change(inputPass, {
        target: {value:'123456'}
    })
    
    fireEvent.submit(buttonSubmit);
    

    expect(handleLogin).toHaveBeenCalled();
    expect(handleLogin).toHaveBeenCalledWith('correo@correo.com','123456')
});