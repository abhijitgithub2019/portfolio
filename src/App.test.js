import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name in the header', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Abhijit Patra/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
