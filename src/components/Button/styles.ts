import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  padding: 0.2rem 3.6rem;
  border-radius: 1.6rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray.600']};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.medium};
    line-height: ${theme.lineHeights.small};

    &:hover {
      background-color: ${theme.colors['gray.500']};
    }
  `}
`
