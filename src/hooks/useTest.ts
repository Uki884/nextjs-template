import react, { useEffect } from 'react'

export const useTest = () => {
  const [count, setCount] = react.useState(0)

  const calcCount = () => {
    setCount(count + 1)
  };

  return {
    calcCount,
    count
  }
}