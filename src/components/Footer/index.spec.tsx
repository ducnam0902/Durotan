import { it, describe, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';

describe('Test Header', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Render Footer component', () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.queryByText(/About Durotan/i)).toBeInTheDocument();
    expect(screen.queryByText(/Our Social/i)).toBeInTheDocument();
    expect(screen.queryByText(/Newsletter/i)).toBeInTheDocument();
  });
});
