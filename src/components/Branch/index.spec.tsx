import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Branch from './index';

describe('Test app', () => {
  it('Render Homepage', () => {
    render(<Branch />);
    const divElement = screen.queryAllByRole('img');
    expect(divElement).toHaveLength(5);
  });
});
