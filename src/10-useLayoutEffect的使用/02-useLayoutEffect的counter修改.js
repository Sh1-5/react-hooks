import React, { useState, useLayoutEffect } from 'react'

export default function LayoutEffectCounterDemo() {
  const [counter, setCounter] = useState(0)
  useLayoutEffect(() => {
    if (counter === 1) {
      setCounter(Math.random())
    }
  }, [counter])
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
