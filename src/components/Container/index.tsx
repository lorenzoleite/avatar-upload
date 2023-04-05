import React from 'react'
import { StyledContainer } from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>
}
