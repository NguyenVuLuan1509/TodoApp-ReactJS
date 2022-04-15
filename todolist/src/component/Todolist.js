import React from 'react'
import TodoItem from './TodoItem'

export default function Todolist(prop) {
  const renderList= () => {
    return prop.todolist.map((item,index)=>{
      return (
        <TodoItem item={item} key={index} index={index} deleteTask={prop.deleteTask} editTask={prop.editTask}/> //Map trong React can phai prop ra key
      )
    })
  }
  return (
    <div className='todoList'>{renderList()}</div>
  )
}
