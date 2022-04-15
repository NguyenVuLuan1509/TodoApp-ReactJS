import React from 'react'

export default function InputTask(prop) {
  return (
    <div className="inputField">
    <input value={prop.inputValue} onChange={prop.onchageInput} type="text" name="task" id="task" placeholder="Add new task"/>
    <button onClick={prop.addTask}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}
