import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHandler, reduceHandler } from '../Redux/Count/action'

const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((store)=>store.CountReducer.count)

const handleAdd=()=>{
    dispatch(addHandler(2))
}

const handleReduce=()=>{
    dispatch(reduceHandler(1))
}
  return (
    <div>Counter
        <h1>Counter:{count}</h1>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleReduce}>REDUCE</button>
    </div>
  )
}

export default Counter