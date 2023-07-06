import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import FeaturedCollection from './index';

describe('Test Featured Collection component', () => {
  it('Render Featured Collection component', () => {
    render(<FeaturedCollection />);
    expect(screen.queryByText('Featured Collections')).toBeInTheDocument();
  });
});
