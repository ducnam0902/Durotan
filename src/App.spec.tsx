import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from './store';
import App from './App';

describe('Test app', () => {
  it('Render Homepage', () => {
    const homeRoute = '/';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[homeRoute]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen).toBeDefined();
  });
});
