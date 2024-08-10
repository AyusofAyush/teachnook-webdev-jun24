import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

// snapshot testing
test('renders input and button', () => {
  render(<AddTodo onAdd={() => {}} />);
  
  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);
  
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

// mock testing - 1
test('calls onAdd when form is submitted', () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);
  
  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);
  
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(buttonElement);
  
  expect(onAddMock).toHaveBeenCalledWith('New Task');
  expect(onAddMock).toHaveBeenCalledTimes(1);
});

// mock testing - 2
test('does not call onAdd if input is empty', () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);
  
  const buttonElement = screen.getByText(/add/i);
  
  fireEvent.click(buttonElement);
  
  expect(onAddMock).not.toHaveBeenCalled();
});
