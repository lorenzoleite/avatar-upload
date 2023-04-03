import styled, { css } from 'styled-components'

export const Dropzone = styled.div`
  ${({ theme }) => css`
    display: flex,
    justify-content: center,
    align-items: center,
    width: 10vw,
    height: 10vh,
    position: relative,
    border-radius: 0.8rem,
    border-width: 2px,
    border-style: dashed,
    border-color: ${theme.colors['gray.300']}
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.medium};
    color: ${theme.colors['gray.500']};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.normal};
    color: ${theme.colors['gray.400']};
  `}
`
