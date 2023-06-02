  
  import * as types from "./actionType"
 
 export const addHandler=(payload)=>{

   return {
    type:'ADD',
    payload
   }
  }


 export const reduceHandler=(payload)=>{

    return {
     type:'REDUCE',
     payload
    }
   }

   export const getTodoreq=()=>{

    return {
        type:types.GET_TODOS_REQ
    }
   }


   export const getTodosucc=(payload)=>{

    return {
        type:types.GET_TODOS_SUCC,
        payload
    }
   }

   export const getTodoerr=()=>{

    return {
        type:types.GET_TODOS_ERR
    }
   }



   export const postTodoreq=()=>{

    return {
        type:types.POST_TODOS_REQ
    }
   }


   export const postTodosucc=(payload)=>{

    return {
        type:types.POST_TODOS_SUCC,
        payload
    }
   }

   export const postTodoerr=()=>{

    return {
        type:types.POST_TODOS_ERR
    }
   }