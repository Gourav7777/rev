import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [text,setText] = useState('')
    const handleAdd=()=>{
        if(text.length){

            addTodo(text)
            setText('')
        }
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>ADD TODO</button>
    </div>
  )
}

export default TodoInput