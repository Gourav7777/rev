
import * as types from './actionType'
 const initialstate = {
  todos:[],
  isLoading:false,
  isError:false
 }

  const reducer =(state=initialstate,action)=>{

    const {type,payload} = action
   switch (type) {
   
   case 'ADD':
    return {...state,  count:state.count + payload}

    case 'REDUCE':
      return {...state,  count:state.count - payload}

    case types.GET_TODOS_REQ:
     return {...state,isLoading:true}

     case types.GET_TODOS_SUCC:
     return {...state,isLoading:false,todos:payload}

     case types.GET_TODOS_ERR:
     return {...state,isLoading:false,isError:true}

     case types.POST_TODOS_REQ:
     return state

     case types.POST_TODOS_SUCC:
      return {...state,todos:[...state.todos,payload]}

     case types.POST_TODOS_ERR:
      return state

      default:
      return state;

   }


  }

  export {reducer}