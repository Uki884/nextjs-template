import React from 'react'
import { useState } from "react";
import styled from 'styled-components';
import { BaseButton } from '@/components/Atoms/BaseButton'

const _Container = styled.div`
  margin: 0 24px;
  text-align: left;
`

const Index = () => {
  return (
    <_Container>
      <h1>next.js</h1>
      <BaseButton color="black">ボタン</BaseButton>
    </_Container>
  )
}
export default Index