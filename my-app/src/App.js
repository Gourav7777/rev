
import './App.css';
 
 
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Components/Todos';
import Counter from './Components/Counter';
function App() {

// const dispatch = useDispatch()
// const count = useSelector((store)=>store.count)


  // console.log(count)
  return (
    <div className="App">
     <Counter/>
     <Todos/>
     
    </div>
  );
}

export default App;
