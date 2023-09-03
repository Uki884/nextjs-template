import { atom, useRecoilState } from "recoil";

type CountState = number;

const initialState: CountState = 0;

export const countState = atom({
  key: "count",
  default: initialState,
});


export const useCount = () => {
  const [count, setCount] = useRecoilState(countState);

  return {
    count,
    setCount,
  }
}