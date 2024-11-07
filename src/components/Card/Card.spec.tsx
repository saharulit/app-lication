import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { appliedJobMock } from '../../core/adapters/job/__mocks__/appliedJob-adapter';

describe('Card', () => {
  it('Should render card correctly', () => {
    render(<Card {...appliedJobMock[0]} />);
    expect(screen.getByText(appliedJobMock[0].title)).toBeInTheDocument();
    // expect(screen.getByText(appliedJobMock[0].status)).toBeInTheDocument();
  });
});
