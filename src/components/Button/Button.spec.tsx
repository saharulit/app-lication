import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the Button', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByRole('button', {
      name: /Primary Button/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
