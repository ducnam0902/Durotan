import { it, describe, vitest } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Test Header', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    window.localStorage.setItem('megaSales', JSON.stringify(true));
  });
  it('Render Header component', () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.queryByText('Durotan')).toBeInTheDocument();
  });

  it('Hide Mega sales after user clicks close button', async () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Header />
      </MemoryRouter>,
    );
    const closeButton = screen.getByAltText(/closeButton/);
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByText(/Mega Sale/)).not.toBeInTheDocument();
    });
  });
});
