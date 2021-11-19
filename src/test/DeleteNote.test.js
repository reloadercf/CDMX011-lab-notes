
import { render, screen, fireEvent } from '@testing-library/react';
import PrintNote from '../components/Authenticate/PrintNote/PrintNote';

import {
    Route,BrowserRouter
  } from 'react-router-dom';

test('Delete Note', () => {
    const useGetNotes = jest.fn(() => [
        {
            data: {
                user: 'user1',
                text: 'Ejemplo nota',
                data_create: null,
                data_update: null
            },
            id: '0123456QWERTY'
        }
    ]);
    const handleDeleteNote = jest.fn();
    const isAuthenticate = {
        uid: '1234567890'
    }


    render(  <BrowserRouter><Route><PrintNote isAuthenticate={isAuthenticate} useGetNotes={useGetNotes} handleDeleteNote={handleDeleteNote} /></Route></BrowserRouter>)

    const buttonDelete = screen.getByRole('button', { name: /Borrar/i })

    fireEvent.click(buttonDelete);

    expect(handleDeleteNote).toHaveBeenCalled();
    expect(handleDeleteNote).toHaveBeenCalledWith('0123456QWERTY')
});