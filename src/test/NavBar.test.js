import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('Comportamiento de la NavBar', () => {

  const handleLogout = jest.fn();
  const isAuthenticate = {email:'laboratoria@laboratoria.com'}
  render(<NavBar isAuthenticate ={isAuthenticate} handleLogout={handleLogout} />)

  const emailNavbar = screen.getByText(/laboratoria@laboratoria.com/i);
  expect(emailNavbar).toBeInTheDocument();

  const buttonLogout = screen.getByRole('button', {name:/Cerrar sesion/i})
  fireEvent.click(buttonLogout)
  expect(handleLogout).toHaveBeenCalledTimes(1)
})