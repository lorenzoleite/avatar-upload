import React from 'react';

import { StyledFlex } from './styles';

export type FlexProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  gap?: string;
  width?: string;
};

export function Flex({ children, ...props }: FlexProps) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}
