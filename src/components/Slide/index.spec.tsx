import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Slide from './index';

describe('Test Slide component', () => {
  it('Render Slide component', () => {
    render(<Slide />);
    expect(screen.queryAllByText('New Arrival')).toBeInTheDocument();
    expect(screen.queryAllByText('Trending 2020')).toBeInTheDocument();
  });
});
