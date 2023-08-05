import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link') 
  expect(linkElement).toBeInTheDocument();
});

//using test to identify and test element is not a good strategy because text might change

test('URL is correct', () => {
  render(<App />)
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement.href).toContain('https://www.portfolio1610.vercel.app')
})
