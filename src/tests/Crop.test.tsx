import { screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { Crop } from '../components/organisms/Crop';
import { renderWithTheme, imageFile } from '../utils/testsUtils';

describe('Crop', () => {
  it('should render the Crop', async () => {
    const onSave = vi.fn();
    const onClose = vi.fn();

    const { container } = renderWithTheme(<Crop imageFile={imageFile} onSave={onSave} onClose={onClose} />);

    expect(screen.getByText(/Crop/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
    expect(screen.getByTestId(/slider/i))
      .toHaveProperty('value', '1')
      .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should be able to change the slider value', async () => {
    const onSave = vi.fn();
    const onClose = vi.fn();

    const { container } = renderWithTheme(<Crop imageFile={imageFile} onSave={onSave} onClose={onClose} />);

    const slider = screen.getByTestId(/slider/i);

    fireEvent.change(slider, {
      target: {
        value: 1.2,
      },
    });

    expect(slider).toHaveProperty('value', '1.2').toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
