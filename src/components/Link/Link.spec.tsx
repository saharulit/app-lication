import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link component', () => {
  it('renders the link element', () => {
    render(<Link mode="primary" size="medium" href="https://example.com" target="_blank">Example Link</Link>);
    const linkElement = screen.getByText('Example Link');
    expect(linkElement).toBeInTheDocument();
  });

  it('applies the correct href and target attributes', () => {
    render(<Link mode="secondary" size="small" href="https://example.com" target="_self">Example Link</Link>);
    const linkElement = screen.getByText('Example Link');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_self');
  });

  it('renders children correctly', () => {
    render(<Link mode="primary" size="large" href="https://example.com" target="_blank">Example Link</Link>);
    const linkElement = screen.getByText('Example Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Example Link');
  });
});
