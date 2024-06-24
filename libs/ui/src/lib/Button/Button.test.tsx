import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {

  test('renders with correct label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('passes props to MuiButton', () => {
    render(<Button label="Submit" color="primary" />);
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toHaveClass('MuiButton-colorPrimary');
  });

  test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    const buttonElement = screen.getByText(/submit/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<Button label="Custom Class" className="custom-class" />);
    const buttonElement = screen.getByText(/custom class/i);
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('supports additional props', () => {
    render(<Button label="Aria Label" aria-label="custom-aria-label" />);
    const buttonElement = screen.getByLabelText('custom-aria-label');
    expect(buttonElement).toBeInTheDocument();
  });
});
