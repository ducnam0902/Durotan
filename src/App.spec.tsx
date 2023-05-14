import { it, describe } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('Test app', () => {
  it('Render Homepage', () => {
    const wrapper = render(<App />);
    wrapper.debug();
    // expect(wrapper).toBeInTheDocument();
  });
});
