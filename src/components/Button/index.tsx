import React from 'react'

import { StyledButton } from './styles'

type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>
}
