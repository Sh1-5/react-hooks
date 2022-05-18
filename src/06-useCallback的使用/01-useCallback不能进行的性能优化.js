import React, { useState, useCallback } from 'react'

export default function CallbackHookDemo1() {
  const [counter, setCounter] = useState(0)
  const increment1 = () => {
    console.log('执行increment函数')
    setCounter(counter + 1)
  }
  const increment2 = useCallback(() => {
    console.log('执行increment函数')
    setCounter(counter + 1)
  }, [counter])
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => increment1()}>+</button>
      <button onClick={() => increment2()}>+</button>
    </div>
  )
}
