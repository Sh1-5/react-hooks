import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(['kobe', 'james'])
  const [students, setStudents] = useState([
    { id: 1, name: 'kobe', age: 18 },
    { id: 2, name: 'james', age: 23 }
  ])
  function changeAge(index) {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }
  return (
    <div>
      <h2>好友列表：</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item + index}>{item}</li>
        })}
      </ul>
      <button onClick={() => setFriends([...friends, 'jordan'])}>
        添加朋友
      </button>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name} - {item.age}
              <button onClick={() => changeAge(index)}>年龄+1</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
