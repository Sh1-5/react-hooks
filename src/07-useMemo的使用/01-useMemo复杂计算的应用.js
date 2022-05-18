import React, { useState, useMemo } from 'react'

function calcNumber(counter) {
  console.log('calcNumber重新计算')
  let total = 0
  for (let i = 1; i <= counter; i++) {
    total += i
  }
  return total
}

export default function MemoHookDemo1() {
  const [counter, setCounter] = useState(10)
  const [isShow, setIsShow] = useState(true)

  // 切换后需要重新计算
  // console.log('calcNumber重新计算')
  // let total = 0
  // for (let i = 1; i <= counter; i++) {
  //   total += i
  // }
  const total = useMemo(() => {
    return calcNumber(counter)
  }, [counter])

  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
