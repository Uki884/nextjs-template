import React from 'react'
import { ButtonVariant, $Button } from './styled';

interface Props {
  children: React.ReactNode,
  color: ButtonVariant['color']
  onClick: () => void
}

export const BaseButton = ({ children, color, onClick }: Props) => {
  return (
    <button css={$Button} onClick={()=> onClick()}>
      { children }
    </button>
  )
}
