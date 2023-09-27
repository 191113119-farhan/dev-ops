import React from "react"

const useCounter = (initialValue = 0) => {
  const [count, setCount] = React.useState<number>(initialValue)

  const increment = React.useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const decrement = React.useCallback(() => {
    setCount((prev) => prev - 1)
  }, [])

  return { count, increment, decrement }
}

export default useCounter