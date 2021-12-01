import React, { useReducer } from 'react'

const initalState=0;

const reducer=(state,action)=>{
    //action is an obj that defines the type of dispatch then an event is fired 

    if(action.type==="INCREMENT"){
        return (state+1);
    }
    if(action.type==="DECREMENT"){
        return(state-1);
    }
}
const Rough=() =>{


    const[state,dispatch]=useReducer(reducer,initalState)
    //useReducer takes 2 values
    // reducer : it is a function that a specific action to be perfromed on the state for a specific action.type 
    //initialState:it is the initial value a state has like useState(0) here 0 is the initial value 
    // it returns 2 values a state 
    // dispatch:dispatch is used to deifine the type for a event 

return(
    <>
      <div>
          <p>
              {state}
          </p>
          <button type="button" onClick={()=>dispatch({type:"INCREMENT"})}>inc</button>
          <button type="button" onClick={()=>dispatch({type:"DECREMENT"})}>DECc</button>
      </div>
    </>)
}
export default Rough