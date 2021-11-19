import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import EditNote from '../components/Authenticate/EditNote';

import {
    Route,BrowserRouter, MemoryRouter
  } from 'react-router-dom';

test('Add Note', async () =>{

  const promise = Promise.resolve()
  const handleEditNote = jest.fn(() => promise)
    const handleGetNote= jest.fn().mockImplementation(() => Promise.resolve({text:'nota'}));
    


    render(<BrowserRouter><MemoryRouter initialEntries={['edit/1qwerty']}><Route path='edit/:idDoc' ><EditNote handleGetNote={handleGetNote} handleEditNote={handleEditNote} />  </Route> </MemoryRouter> </BrowserRouter>);
    const buttonSubmit= screen.getByRole('button', { name: /Guardar/i })
    const textArea = screen.getByPlaceholderText('Termina de editar tu nota')

    expect(buttonSubmit).toBeInTheDocument();

    fireEvent.change(textArea, {
        target: {value:'Esto es un ejemplo de edicion de nota'}
    })
    
    fireEvent.submit(buttonSubmit);
    

    expect(handleEditNote).toHaveBeenCalled();
    expect(handleEditNote).toHaveBeenCalledWith('1qwerty','Esto es un ejemplo de edicion de nota')
    await act(() => promise)
});