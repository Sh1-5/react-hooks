import React, { useState } from 'react'

export default function CounterHook() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
