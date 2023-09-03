import react, { useEffect } from 'react'
import { act, renderHook } from "@testing-library/react";
import { useTest } from './useTest'

describe('useHoge Custom Hooks Test', () => {
  it("初期値は0であること", () => {
    const { result } = renderHook(() => useTest());
    expect(result.current.count).toBe(0);
  });

  it("calcCountを実行するとカウントが1になること", () => {
    const { result } = renderHook(() => useTest());
    act(() => {
      result.current.calcCount();
    });

    expect(result.current.count).toBe(1);
  });
})
