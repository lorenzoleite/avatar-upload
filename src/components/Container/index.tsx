import React from 'react'
import { Wrapper } from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>
}
