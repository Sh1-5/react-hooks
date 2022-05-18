import { useState, useEffect } from 'react'

export const useLocalStorage = (key) => {
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem(key))
    return name
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name))
  }, [key, name])
  return [name, setName]
}
