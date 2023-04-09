import { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Slider({ ...props }: InputProps) {
  return <StyledInput {...props} />;
}
