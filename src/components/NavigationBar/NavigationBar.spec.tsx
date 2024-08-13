import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';

describe('NavigationBar Component', () => {
  it('renders the logout button with correct text', () => {
    render(<NavigationBar onLogOut={vi.fn()} />);
    const buttonElement = screen.getByRole('button', { name: /logout/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onLogOut function when the button is clicked', () => {
    const onLogOutMock = vi.fn();
    render(<NavigationBar onLogOut={onLogOutMock} />);
    const buttonElement = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(buttonElement);
    expect(onLogOutMock).toHaveBeenCalledTimes(1);
  });
});
