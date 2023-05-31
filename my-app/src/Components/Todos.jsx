import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoreq, getTodosucc, postTodoerr, postTodoreq, postTodosucc } from '../Redux/action'
import TodoInput from './TodoInput'

const Todos = () => {

 const dispatch = useDispatch()
 const todos = useSelector((store)=>store.todos)
 const loading = useSelector((store)=>store.isLoading)
 const error = useSelector((store)=>store.isError)

 const getTodos=async()=>{
    
    try {
 
        dispatch(getTodoreq())
     let res = await fetch (`http://localhost:8080/todos`)
     res = await res.json()
     
        dispatch(getTodosucc(res))
    } catch (error) {
        console.log(error)
    }

 }


 const addTodo=async(title)=>{

    if(title){
        const payload = {
            title,
            status:false
        }
        
        try {
            dispatch(postTodoreq())
            
            let res = await fetch (`http://localhost:8080/todos`,{
                method:'POST',
                body:payload,
                headers:{
                    "Content-type":"application/json"
                }
            })
            
            console.log(res)
            // res = await res.json()
            dispatch(postTodosucc(payload))
        } catch (error) {
            dispatch(postTodoerr())
        }
    }


 }

  useEffect(()=>{
    getTodos()
  },[])

 console.log(todos)
  return (
    <div>
      <h1>
        
        Todos
        </h1>  
        <TodoInput addTodo={addTodo}/>
       {
        todos.length&& todos.map((el)=>{
        return <>

            <h1>{el.title}</h1>
            <h3>{el.status?"Completed":"Incomplete"}</h3>
        </>
            
        })
       }
    </div>
  )
}

export default Todos