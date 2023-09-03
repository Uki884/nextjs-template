import { $Container } from './styled';
import { useCount } from './hooks/useCount';
import { BaseButton } from '@/components/common/BaseButton';

export const Home = () => {
  const { count, setCount } = useCount()
  return (
    <div css={$Container}>
      <h1>next.js</h1>
      { count }
      <BaseButton onClick={() => setCount(count + 1)} color={'primary'}>カウント+</BaseButton>
    </div>
  )
}
export default Home