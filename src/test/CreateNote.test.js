import { render, screen, fireEvent } from '@testing-library/react';
import AddNote from '../components/Authenticate/AddNote'

test('Add Note', () =>{
    const handleAddNote = jest.fn();
    const isAuthenticate={
        uid:'1234567890'
    }

    render(<AddNote isAuthenticate={isAuthenticate} handleAddNote={handleAddNote} />);
    const buttonSubmit= screen.getByRole('button', { name: /Guardar/i })
    const textArea = screen.getByPlaceholderText('Escribe')

    expect(buttonSubmit).toBeInTheDocument();

    fireEvent.change(textArea, {
        target: {value:'Esto es un ejemplo de nota'}
    })
    
    fireEvent.submit(buttonSubmit);
    

    expect(handleAddNote).toHaveBeenCalled();
    expect(handleAddNote).toHaveBeenCalledWith('1234567890','Esto es un ejemplo de nota')
});