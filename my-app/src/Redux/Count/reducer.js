

 const initialstate = {
  count:15
 }

  const reducer =(state=initialstate,action)=>{

    const {type,payload} = action
   switch (type) {
   
   case 'ADD':
    return {...state,  count:state.count + payload}

    case 'REDUCE':
      return {...state,  count:state.count - payload}

   

      default:
      return state;

   }


  }

  export {reducer}