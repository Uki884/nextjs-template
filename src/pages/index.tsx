import React from 'react'
import { Home } from '@/features/Home';
import { useTest } from '@/hooks/useTest';

const IndexPage = () => {
  useTest()

  return (
    <Home />
  )
}
export default IndexPage