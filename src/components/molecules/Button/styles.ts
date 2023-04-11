import styled, { DefaultTheme, css } from 'styled-components';
import { ButtonProps } from '.';

const modifiers = {
  underline: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.medium};
    line-height: ${theme.font.lineHeight.medium};
    text-decoration: underline;

    padding: 0;
    border-radius: 0;

    background-color: transparent;
    color: ${theme.color['gray.600']};

    &:hover {
      background-color: transparent;
      color: ${theme.color['gray.400']};
    }
  `,
  icon: (theme: DefaultTheme) => css`
    font-family: none;
    font-size: 0;
    line-height: 0;
    text-decoration: none;

    padding: 0.2rem;
    border-radius: 0;

    clip-path: circle();
    background-color: transparent;

    &:hover {
      padding: 0.2rem;
      background-color: ${theme.color['gray.200']};
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.medium};
    line-height: ${theme.font.lineHeight.small};

    padding: 0.2rem 3.6rem;
    border: none;
    border-radius: 1.6rem;

    background-color: ${theme.color['gray.600']};
    color: ${theme.color.white};

    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${theme.color['gray.400']};
    }

    ${variant === 'underline' && modifiers.underline(theme)}
    ${variant === 'icon' && modifiers.icon(theme)}
  `}
`;
