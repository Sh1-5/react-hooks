import React, { useEffect } from 'react'

const Home = (props) => {
  useLogLife('Home')
  return <div>Home</div>
}

const Profile = (props) => {
  useLogLife('Profile')
  return <div>Profile</div>
}

export default function CustomLifeHook() {
  useEffect(() => {
    console.log('CustomLifeHook1组件被创建')
    return () => {
      console.log('CustomLifeHook1组件被销毁')
    }
  })
  return (
    <div>
      <Home />
      <Profile />
    </div>
  )
}

const useLogLife = (name) => {
  useEffect(() => {
    console.log(`${name}组件被创建`)
    return () => {
      console.log(`${name}组件被销毁`)
    }
  })
}
