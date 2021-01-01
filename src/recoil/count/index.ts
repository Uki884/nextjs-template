import { atom } from 'recoil'

type CountState = number

const initialState: CountState = 0

export const countState = atom({
  key: 'count',
  default: initialState
})