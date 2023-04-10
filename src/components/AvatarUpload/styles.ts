import styled, { css } from 'styled-components';

type DropzoneProps = {
  justify?: string;
};

export const Dropzone = styled.div<DropzoneProps>`
  ${({ theme, justify }) => css`
    display: flex;
    justify-content: ${justify};
    width: 55.3rem;
    height: 17.7rem;
    padding: 3.2rem;
    border-radius: 0.8rem;
    background-color: ${theme.color['gray.100']};

    border-width: 2px;
    border-style: dashed;
    border-color: ${theme.color['gray.300']};
  `}
`;

export const ImagePreview = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.3rem;
    height: 11.3rem;
    border-radius: 7.25rem;
    clip-path: circle();
    margin-right: 5rem;
    background-color: ${theme.color['gray.200']};
  `}
`;

export const Image = styled.img`
  width: 11.3rem;
  height: 11.3rem;
`;

export const DropzoneTitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.medium};
    line-height: ${theme.font.lineHeight.small};
    color: ${theme.color['gray.500']};
  `}
`;

export const DropzoneSubtitle = styled(DropzoneTitle)`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.normal};
    color: ${theme.color['gray.400']};
  `}
`;
