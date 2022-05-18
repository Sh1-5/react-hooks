import React, { useState, useEffect } from 'react'

export default function EffectHookCancelDemo() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log('订阅一些事件')
    return () => {
      console.log('取消订阅事件')
    }
  }, [])
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
