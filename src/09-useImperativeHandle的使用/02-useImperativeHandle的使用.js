import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const Input = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          inputRef.current.focus()
        },
        blur: () => {
          inputRef.current.blur()
        }
      }
    },
    [inputRef]
  )
  // return <input ref={ref} type="text" />
  return <input ref={inputRef} type="text" />
})

export default function ImperativeHandleHookDemo() {
  const inputRef = useRef()
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
      <button onClick={() => inputRef.current.blur()}>取消聚焦</button>
    </div>
  )
}
