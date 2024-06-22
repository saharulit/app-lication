import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders the input element', () => {
    render(<Input placeholder="Enter text" type="text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct type attribute', () => {
    render(<Input placeholder="Enter password" type="password" />);
    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('passes additional props correctly', () => {
    render(<Input placeholder="Enter email" type="email" data-testid="custom-input" />);
    const inputElement = screen.getByTestId('custom-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    render(<Input placeholder="Enter text" type="text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveClass('app-bg-white rounded-lg p-4');
  });
});
