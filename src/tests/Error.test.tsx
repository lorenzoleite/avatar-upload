import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { Error } from '../components/organisms/Error';
import { renderWithTheme } from '../utils/testsUtils';
import { theme } from '../themes/theme';

describe('Error', () => {
  it('should render the Error', () => {
    const onClose = vi.fn();
    const { container } = renderWithTheme(<Error messageError="Sorry, the upload failed." onClose={onClose} />);

    expect(screen.getByTestId(/attentionIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorry,/i)).toHaveStyle({
      color: theme.color['orange.100'],
    });
    expect(screen.getByRole('button', { name: /Try again/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
