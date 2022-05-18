import React, { Component, useRef } from 'react'

class TestCpn extends Component {
  render() {
    return <div>TestCpn</div>
  }
}

export default function RefHookDemo1() {
  const titleRef = useRef()
  const inputRef = useRef()
  const cpnRef = useRef()

  function changeDOM() {
    console.log(titleRef, inputRef, cpnRef)
    titleRef.current.innerHTML = 'Hello React'
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo1</h2>
      <input ref={inputRef} type="text" />
      {/* 应用在类组件上 */}
      <TestCpn ref={cpnRef} />
      <button onClick={() => changeDOM()}>修改DOM</button>
    </div>
  )
}
