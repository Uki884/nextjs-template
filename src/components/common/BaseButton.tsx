import React from 'react'
import { colorVariants, button } from './style.css';

interface Props {
  children: React.ReactNode,
  color: keyof typeof colorVariants
  onClick: () => void
}

export const BaseButton = ({ children, color, onClick }: Props) => {
  return (
    <button className={`${button} ${colorVariants[color]}`} onClick={()=> onClick()}>
      { children }
    </button>
  )
}
