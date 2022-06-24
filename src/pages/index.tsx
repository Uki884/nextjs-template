import React from 'react'
import { Home } from '@/components/domain/Home';
import { useTest } from '@/hooks/useTest';

const IndexPage = () => {
  useTest()

  return (
    <Home />
  )
}
export default IndexPage