import React, { createContext, useState } from 'react'

// import CounterClass from './01-体验hooks/01-counter-class'
// import CounterHook from './01-体验hooks/02-counter-hook'
// import CounterHook from './01-体验hooks/03-counter-hook'

// import MultiHookState from './02-useState的使用/01-多个状态的使用'
// import ComplexHookState from './02-useState的使用/02-复杂状态的修改'

// import ClassCounterTitleChange from './03-useEffect的使用/01-class实现title的修改'
// import HookCounterTitleChange from './03-useEffect的使用/02-hook实现title的修改'
// import EffectHookCancelDemo from './03-useEffect的使用/03-useEffect模拟订阅和取消订阅'
// import MultiEffectHookDemo from './03-useEffect的使用/04-多个useEffect一起使用'

// import ContextHookDemo from './04-useContext的使用/01-useContext的使用'
// export const UserContext = createContext()
// export const ThemeContext = createContext()

// import Home from './05-useReducer的使用/Home'

// import CallbackHookDemo1 from './06-useCallback的使用/01-useCallback不能进行的性能优化'
// import CallbackHookDemo2 from './06-useCallback的使用/02-useCallback进行的性能优化'

// import MemoHookDemo1 from './07-useMemo的使用/01-useMemo复杂计算的应用'
// import MemoHookDemo2 from './07-useMemo的使用/02-useMemo传入子组件应用类型'

// import RefHookDemo1 from './08-useRef的使用/01-useRef引用DOM'
// import RefHookDemo2 from './08-useRef的使用/02-useRef引用其它数据'

// import ForwardRefDemo from './09-useImperativeHandle的使用/01-回顾forwardRef的用法'
// import ImperativeHandleHookDemo from './09-useImperativeHandle的使用/02-useImperativeHandle的使用'

// import EffectCounterDemo from './10-useLayoutEffect的使用/01-useEffect的counter修改'
// import LayoutEffectCounterDemo from './10-useLayoutEffect的使用/02-useLayoutEffect的counter修改'

// import CustomLifeHook from './11-自定义hook/01-认识自定义hook'
// import CustomContextShareHook from './11-自定义hook/02-自定义hook练习-Context共享'
// export const UserContext = createContext()
// export const TokenContext = createContext()
// import CustomScrollPositionHook from './11-自定义hook/03-自定义hook练习-获取滚动位置'
import CustomDataStoreHook from './11-自定义hook/04-自定义hook练习-localStorage存储'

export default function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook /> */}

      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}

      {/* <ClassCounterTitleChange /> */}
      {/* <HookCounterTitleChange /> */}
      {/* {isShow && <EffectHookCancelDemo />}
      <button onClick={() => setIsShow(!isShow)}>切换</button> */}
      {/* <MultiEffectHookDemo /> */}

      {/* <UserContext.Provider value={{ name: 'kobe', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '18px', color: 'red' }}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <Home /> */}

      {/* <CallbackHookDemo1 /> */}
      {/* <CallbackHookDemo2 /> */}

      {/* <MemoHookDemo1 /> */}
      {/* <MemoHookDemo2 /> */}

      {/* <RefHookDemo1 /> */}
      {/* <RefHookDemo2 /> */}

      {/* <ForwardRefDemo /> */}
      {/* <ImperativeHandleHookDemo /> */}

      {/* <EffectCounterDemo /> */}
      {/* <LayoutEffectCounterDemo /> */}

      {/* {isShow && <CustomLifeHook />}
      <button onClick={() => setIsShow(!isShow)}>切换</button> */}
      {/* <UserContext.Provider value={{ name: 'kobe', age: 18 }}>
        <TokenContext.Provider value={{ token: 'token' }}>
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPositionHook /> */}
      <CustomDataStoreHook />
    </div>
  )
}
