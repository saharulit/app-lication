import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('renders the Modal open with header body and footer', () => {
    const headerElement = <h1>Modal Title</h1>;
    const bodyElement = <div>Body</div>;
    const footerElement = <button> footer </button>;
    render(
      <Modal
        open={true}
        header={headerElement}
        body={bodyElement}
        footer={footerElement}
      ></Modal>
    );
    const titleElement = screen.getByRole('heading', {
      name: /Modal Title/i,
    });
    const buttonElement = screen.getByRole('button', {
      name: /footer/i,
    });
    const divElement = screen.getByText('Body');
    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(divElement).toBeInTheDocument();
    expect(screen.getByTestId('modal-header')).toBeInTheDocument();
    expect(screen.getByTestId('modal-body')).toBeInTheDocument();
    expect(screen.getByTestId('modal-footer')).toBeInTheDocument();
  });
  it('should not render header, body and footer elements', () => {
    render(<Modal open={true}></Modal>);
    expect(screen.queryByTestId('modal-header')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal-body')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal-footer')).not.toBeInTheDocument();
  });
});
