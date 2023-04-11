import React from 'react';
import fetch from 'node-fetch';

import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { theme } from '../themes/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const imageFile = await fetch(
  'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=234&q=16',
)
  .then(response => response.blob())
  .then(blob => new File([blob], 'image.jpg', { type: 'image/jpeg' }));
