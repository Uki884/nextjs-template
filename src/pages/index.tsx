import React from 'react'
import styled from 'styled-components';
import { BaseButton } from '@/components/Atoms/BaseButton'
import { countState } from '@/recoil/count'
import { useRecoilState } from 'recoil'

const _Container = styled.div`
  margin: 0 24px;
  text-align: left;
`

const Index = () => {
  const [count, setCount] = useRecoilState(countState)
  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <_Container>
      <h1>next.js</h1>
      {count}
      <BaseButton color="black" onClick={increaseCount}>ボタン</BaseButton>
    </_Container>
  )
}
export default Index