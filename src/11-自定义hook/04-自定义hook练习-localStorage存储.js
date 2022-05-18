import React, { useState, useEffect } from 'react'

import { useLocalStorage } from './hooks/localStorage-hook'

export default function CustomDataStoreHook() {
  // const [name, setName] = useState(() => {
  //   const name = JSON.parse(window.localStorage.getItem('name'))
  //   return name
  // })
  // useEffect(() => {
  //   window.localStorage.setItem('name', JSON.stringify(name))
  // }, [name])
  const [name, setName] = useLocalStorage('name')
  return (
    <div>
      <h2>CustomDataStoreHook：{name}</h2>
      <button onClick={() => setName('kobe')}>设置name</button>
    </div>
  )
}
