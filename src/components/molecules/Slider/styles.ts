import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme, value }) => css`
    appearance: none;
    width: 27.6rem;
    height: 0.2rem;
    border-radius: 0.1rem;
    margin-bottom: 3.5rem;
    cursor: pointer;

    background-color: ${theme.color['blue.100']};
    color: ${theme.color['blue.200']};

    background: ${`linear-gradient(
      to right,
      ${theme.color['blue.200']} 0%,
      ${theme.color['blue.200']} ${(Number(value) - 1) * 100}%,
      ${theme.color['blue.100']} ${(Number(value) - 1) * 100}%,
      ${theme.color['blue.100']} 100%
    )`};

    ::-webkit-slider-thumb {
      appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      clip-path: circle();
      background-color: ${theme.color['blue.200']};
    }

    ::-moz-range-thumb {
      appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      clip-path: circle();
      background-color: ${theme.color['blue.200']};
    }
  `}
`;
