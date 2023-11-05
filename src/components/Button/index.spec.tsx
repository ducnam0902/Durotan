import Button from '@durotan/components/Button';
import { render, screen } from '@testing-library/react';
import { it, describe, vitest } from 'vitest';

describe('Test Button', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Render Footer component', () => {
    render(<Button>Durotan Button</Button>);
    expect(screen.queryByText(/Durotan Button/i)).toBeInTheDocument();
  });
});
