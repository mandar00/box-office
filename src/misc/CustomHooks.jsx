import {useEffect, useReducer} from 'react'


function showsReducer(prevState,action){
    switch(action.type){
        case 'ADD':
            return[...prevState,action.showId]
        
        case 'REMOVE':
            return[prevState.filter((showId)=>showId!==action.showId)]
        
        default:
            return prevState
    }
}

function usePresistedReducer(reducer,initialState,key){
  const[state,dispatch] = useReducer(reducer,initialState,(initial)=>{
      //the 3rd parameter passed to useReducer is a callback function to set the initial value or initial State 
      const presisited=localStorage.getItem(key);
      return presisited?JSON.parse(presisited):initial;
      //look into local storage  for any array named as key if it does set it as initial value 
  })
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(state))
  },[state,key])
  console.log(state)
  return[state,dispatch];
}

export function useShows(key='shows'){
    return usePresistedReducer(showsReducer,[],key)
}