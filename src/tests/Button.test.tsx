import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Button } from '../components/molecules/Button';
import { renderWithTheme } from '../utils/testsUtils';
import { theme } from '../themes/theme';

describe('Button', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Save</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render the button with solid variant', () => {
    renderWithTheme(<Button variant="solid">Save</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument().toHaveStyle({
      'background-color': theme.color['gray.600'],
    });
  });
  it('should render the button with underline variant', () => {
    renderWithTheme(<Button variant="underline">Save</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument().toHaveStyle({
      'background-color': 'transparent',
      'text-decoration': 'underline',
    });
  });
  it('should render the button with icon variant', () => {
    renderWithTheme(<Button variant="icon">Save</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument().toHaveStyle({
      'background-color': 'transparent',
      'text-decoration': 'none',
      'clip-path': 'circle()',
    });
  });
});
