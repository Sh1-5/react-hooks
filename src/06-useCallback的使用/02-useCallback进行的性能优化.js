import React, { useState, useCallback, memo } from 'react'

/**
 * useCallback什么时候使用？
 * 场景：在将一个组件中的函数，传递给子组件进行回调使用时，使用useCallback对函数进行处理
 */

const Button = memo((props) => {
  console.log(props.title)
  return <button onClick={props.increment}>+</button>
})

export default function CallbackHookDemo2() {
  console.log('CallbackHookDemo2重新渲染')
  const [counter, setCounter] = useState(0)
  const [isShow, setIsShow] = useState(true)
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
      {/* <button onClick={() => increment1()}>+</button>
      <button onClick={() => increment2()}>+</button> */}
      <Button increment={increment1} title="btn1" />
      <Button increment={increment2} title="btn2" />
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
