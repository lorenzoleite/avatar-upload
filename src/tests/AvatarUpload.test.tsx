import { screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import { AvatarUpload } from '../components/organisms/AvatarUpload';
import { renderWithTheme } from '../utils/testsUtils';
import { theme } from '../themes/theme';

describe('AvatarUpload', () => {
  const image = new File(['image'], 'image.png', { type: 'image/png' });
  const pdfFile = new File(['pdfFile'], 'pdfFile.pdf', { type: 'pdfFile.pdf' });

  it('should render the AvatarUpload', () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    expect(screen.getByTestId(/mediaIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/Organization Logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Drop the image here or click to browse./i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should be able to drop an image', async () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    const inputDropzone = screen.getByTestId('inputDropzone');

    Object.defineProperty(inputDropzone, 'files', {
      value: [image],
    });

    fireEvent.change(inputDropzone);

    const cropTitle = await waitFor(() => screen.getByText(/Crop/i));
    const slider = await waitFor(() => screen.getByTestId(/slider/i));
    const saveButton = await waitFor(() => screen.getByRole('button', { name: /Save/i }));
    const closeButton = await waitFor(() => screen.getByTestId('closeIcon'));

    expect(cropTitle).toBeInTheDocument();
    expect(slider).toHaveProperty('value', '1').toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    const dropzoneTitle = await waitFor(() => screen.getByText(/Drop the image here or click to browse./i));

    expect(dropzoneTitle).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should be able to click on close button', async () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    const inputDropzone = screen.getByTestId('inputDropzone');

    Object.defineProperty(inputDropzone, 'files', {
      value: [image],
    });

    fireEvent.change(inputDropzone);

    const cropTitle = await waitFor(() => screen.getByText(/Crop/i));
    const closeButton = await waitFor(() => screen.getByTestId('closeIcon'));

    expect(cropTitle).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    const dropzoneTitle = await waitFor(() => screen.getByText(/Drop the image here or click to browse./i));

    expect(dropzoneTitle).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should get an error when trying to drop more than one file', async () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    const inputDropzone = screen.getByTestId('inputDropzone');

    Object.defineProperty(inputDropzone, 'files', {
      value: [image, image],
    });

    fireEvent.change(inputDropzone);

    const errorTitle = await waitFor(() => screen.getByText('Sorry, too many files.'));
    const errorButton = await waitFor(() => screen.getByRole('button', { name: /Try again/i }));

    expect(errorTitle)
      .toHaveStyle({
        color: theme.color['orange.100'],
      })
      .toBeInTheDocument();
    expect(errorButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should get an error when trying to drop unsupported file extension', async () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    const inputDropzone = screen.getByTestId('inputDropzone');

    Object.defineProperty(inputDropzone, 'files', {
      value: [pdfFile],
    });

    fireEvent.change(inputDropzone);

    const errorTitle = await waitFor(() =>
      screen.getByText('Sorry, file type must be image/png,.png,image/jpeg,.jpeg,.jpg.'),
    );
    const errorButton = await waitFor(() => screen.getByRole('button', { name: /Try again/i }));

    expect(errorTitle)
      .toHaveStyle({
        color: theme.color['orange.100'],
      })
      .toBeInTheDocument();
    expect(errorButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
