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

export const Image = styled.img`
  width: 11.3rem;
  height: 11.3rem;
`

export const FilePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.3rem;
  height: 11.3rem;
  border-radius: 7.25rem;
  clip-path: circle();

  ${({ theme }) => css`
    background-color: ${theme.colors['gray.200']};
  `}
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 1.2rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 3.2rem;
  }
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
