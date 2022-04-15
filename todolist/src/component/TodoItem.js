import React from 'react'

export default function TodoItem(prop) {
  return (
    <li onDoubleClick={()=>{prop.editTask(prop.item.id)}}>
         {prop.item.content} 
         <span className="icon" onClick={()=>{
             prop.deleteTask(prop.item.id)
         }}>
             <i className="fa-solid fa-trash-can"></i>
         </span>
        {""}
    </li>
  )
}
