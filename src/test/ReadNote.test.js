import { render } from '@testing-library/react';
import PrintNote from '../components/Authenticate/PrintNote/PrintNote';

test('Print Note ', () => {
    const useGetNotes = jest.fn();
    const handleDeleteNote = jest.fn();
    const isAuthenticate = {
        uid: '1234567890'
    }

    render(<PrintNote isAuthenticate={isAuthenticate} useGetNotes={useGetNotes} handleDeleteNote={handleDeleteNote} />);

    expect(useGetNotes).toHaveBeenCalled();
    expect(useGetNotes).toHaveBeenCalledWith('1234567890')
});