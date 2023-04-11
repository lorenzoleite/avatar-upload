import React from 'react';

import { StyledImagePreview } from './styles';

export type ImagePreviewProps = {
  children?: React.ReactNode;
  marginRight?: string;
};

export function ImagePreview({ children, ...props }: ImagePreviewProps) {
  return <StyledImagePreview {...props}>{children}</StyledImagePreview>;
}
