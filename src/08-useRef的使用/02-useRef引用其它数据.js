import React, { useState, useRef, useEffect } from 'react'

export default function RefHookDemo2() {
  const [counter, setCounter] = useState(0)
  const counterRef = useRef(counter)

  const lastRef = useRef(counter)
  useEffect(() => {
    lastRef.current = counter
  }, [counter])

  return (
    <div>
      <h2>counterRef计数：{counterRef.current}</h2>
      <h2>当前计数：{counter}</h2>
      <h2>上一次计数：{lastRef.current}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
