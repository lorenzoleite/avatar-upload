import styled, { css } from 'styled-components';

export const StyledCrop = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 55.3rem;
    height: 17.7rem;
    padding: 3.2rem;
    border-radius: 0.8rem;
    background-color: ${theme.color['gray.100']};
  `}
`;

export const CropTitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.normal};
    line-height: ${theme.font.lineHeight.medium};

    color: ${theme.color['gray.400']};

    margin-bottom: 1.3rem;
  `}
`;
