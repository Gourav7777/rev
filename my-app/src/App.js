import {useState} from 'react'
import './App.css';
 
  import { addHandler,reduceHandler } from './Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Components/Todos';
function App() {

// const dispatch = useDispatch()
// const count = useSelector((store)=>store.count)


  // console.log(count)
  return (
    <div className="App">
     
     <Todos/>
     
    </div>
  );
}

export default App;
