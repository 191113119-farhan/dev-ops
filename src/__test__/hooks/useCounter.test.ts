
import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react';
import useCounter from '../../hooks/useCounter';

describe('useCounter Functionalibity', () => {
  it('Should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  it('Should decrement counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
})
