import { it, describe } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@durotan/utils';
import BaseLayout from './index';

describe('Test BaseLayout component', () => {
  it('Render BaseLayout component', () => {
    renderWithRouter(<BaseLayout />);
    expect(screen.queryByText('Mega Sale')).toBeInTheDocument();
    expect(screen.queryByText('Durotan')).toBeInTheDocument();
    expect(screen.queryByText('About Durotan')).toBeInTheDocument();
  });
});
