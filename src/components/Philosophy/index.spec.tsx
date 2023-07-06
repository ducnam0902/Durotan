import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Philosophy from './index';

describe('Test Philosophy', () => {
  it('Render Philosophy component', () => {
    render(<Philosophy />);
    expect(screen.queryByText('Our Philosophy')).toBeInTheDocument();
  });
});
