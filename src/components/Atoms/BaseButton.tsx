import React from 'react'
import styled from 'styled-components';

const _Button = styled.button`
  position: relative;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background-color: ${props=> props.color };
  transition: background-color 0.2s ease,
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  height: 37px;
  min-width: 90px;
  border-radius: 2px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    -webkit-transform: translate(0, 2px);
    -moz-transform: translate(0, 2px);
    transform: translate(0, 2px);
  }
`

export const BaseButton = ({ children, color, onClick }: any) => {
  return (
    <_Button color={color} onClick={()=> onClick()}>
      { children }
    </_Button>
  )
}
