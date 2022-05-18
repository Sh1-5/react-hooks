import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    default:
      return { ...state, counter: state.counter - 1 }
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return (
    <div>
      <h2>当前计数：{state.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
