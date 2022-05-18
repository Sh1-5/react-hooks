import React, { memo, useState, useMemo } from 'react'

const Info = memo((props) => {
  console.log('Info重新渲染')
  return (
    <h2>
      姓名：{props.info.name} 年龄：{props.info.age}
    </h2>
  )
})

export default function MemoHookDemo2() {
  console.log('MemoHookDemo2重新渲染')
  const [isShow, setIsShow] = useState(true)

  // info是一个局部变量，一直在改变
  // const info = { name: 'kobe', age: 18 }
  const info = useMemo(() => {
    return { name: 'kobe', age: 18 }
  }, [])
  return (
    <div>
      <Info info={info} />
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
