import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../components/NoAuthenticate/Signup'

import {
    Route,BrowserRouter
  } from 'react-router-dom';

test('Add Note', () =>{
    const handleCreateAccount = jest.fn();

    render(<BrowserRouter><Route><Signup handleCreateAccount={handleCreateAccount} /></Route></BrowserRouter>);
    const buttonSubmit= screen.getByRole('button', { name: /Registrar/i })
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
    

    expect(handleCreateAccount).toHaveBeenCalled();
    expect(handleCreateAccount).toHaveBeenCalledWith('correo@correo.com','123456')
});