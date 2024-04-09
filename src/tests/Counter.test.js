import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // test logic here
});

test('should render initial count with value of 0', () => {
  // test logic here
});

test('clicking + increments the count', () => {
  // test logic here
});

test('clicking - decrements the count', () => {
 // test logic here
 
});
