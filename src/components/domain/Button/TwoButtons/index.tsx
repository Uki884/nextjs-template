import React, { useState } from 'react'
import { buttons } from './style.css';
import { BaseButton } from '@/components/common/BaseButton';
import { countState } from '@/recoil/count';
import { useRecoilState } from 'recoil';

export const TwoButtons = () => {
  const [count, setCount] = useState(0)
    const [count2, setCount2] = useRecoilState(countState)

  const increaseCount = () => {
    setCount(count + 1)
  };

  return (
    <div className={buttons}>
      <BaseButton color="primary" onClick={increaseCount}>ボタン1 { count }</BaseButton>
      <BaseButton color="secondary" onClick={() => setCount2(count2 + 1)}>ボタン2</BaseButton>
    </div>
  )
}
