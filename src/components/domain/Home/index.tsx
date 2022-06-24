import React from 'react'
import { countState } from '@/recoil/count'
import { useRecoilState } from 'recoil'
import { TwoButtons } from '@/components/domain/Button/TwoButtons';
import { container } from './style.css';

export const Home = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <div className={container}>
      <h1>next.js</h1>
      {count}
      <TwoButtons />
    </div>
  )
}
export default Home