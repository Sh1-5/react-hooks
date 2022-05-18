import React, { useRef, forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

export default function ForwardRefDemo() {
  const inputRef = useRef()
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
