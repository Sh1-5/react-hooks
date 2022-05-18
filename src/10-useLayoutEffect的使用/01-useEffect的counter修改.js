import React, { useState, useEffect } from 'react'

export default function EffectCounterDemo() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
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
