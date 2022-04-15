import React from 'react'

export default function Footer(prop) {
  return (
    <div className="footer">
    <span>You have <span className="pendingTask">{prop.todoList.length}</span> pending task!</span>
    <button onClick={prop.deleteAll}>Clear All</button>
    </div>
  )
}
