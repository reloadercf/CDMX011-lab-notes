import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprende/i);
  expect(linkElement).toBeInTheDocument();
});
