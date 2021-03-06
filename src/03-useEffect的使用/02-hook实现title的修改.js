import React, { useState, useEffect } from 'react'

export default function HookCounterTitleChange() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
