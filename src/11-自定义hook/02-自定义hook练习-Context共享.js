import React, { useContext } from 'react'

// import { UserContext, TokenContext } from '../App'
import { useUserContext } from './hooks/user-hook'

export default function CustomContextShareHook() {
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  const [user, token] = useUserContext()
  console.log(user, token)
  return <div>CustomContextShareHook</div>
}
