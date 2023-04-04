import styled, { css } from 'styled-components'

export const Dropzone = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55.3rem;
    height: 17.7rem;
    background-color: ${theme.colors['gray.100']};
    border-radius: 0.8rem;
    border-width: 2px;
    border-style: dashed;
    border-color: ${theme.colors['gray.300']};
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.medium};
    line-height: ${theme.lineHeights.small};
    color: ${theme.colors['gray.500']};
  `}
`

export const Subtitle = styled(Title)`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.normal};
    color: ${theme.colors['gray.400']};
  `}
`
