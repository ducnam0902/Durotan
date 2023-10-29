import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Test Header', () => {
  it('Render Header component', () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.queryByText('Durotan')).toBeInTheDocument();
  });

  it('Hide Mega sales after user clicks close button', () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Header />
      </MemoryRouter>,
    );
    screen.debug();
    cnst;

    expect(screen.queryByText('Durotan')).toBeInTheDocument();
  });
});
