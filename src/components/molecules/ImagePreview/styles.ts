import styled, { css } from 'styled-components';

import { ImagePreviewProps } from '.';

export const StyledImagePreview = styled.div<ImagePreviewProps>`
  ${({ theme, marginRight }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.3rem;
    height: 11.3rem;
    border-radius: 7.25rem;
    clip-path: circle();
    margin-right: ${marginRight || '3.2rem'};
    background-color: ${theme.color['gray.200']};
  `}
`;
