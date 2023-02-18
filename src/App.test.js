import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main and recent news title', () => {
  render(<App />);
  const headingElement = screen.getByText(/main and recent news/i);
  expect(headingElement).toBeInTheDocument();
});
