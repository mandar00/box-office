import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/Config";

const initialState={
  show:null,
  isLoading:true,
  error:null
}

const reducer=(state,action)=>{
  console.log(action)
    switch(action.type){
      case 'FETCH_SUCCESS':{
        return{ ...state,show:action.show,isLoading:false,error:null};
        
      }
      case 'FETCH_FAILED':{
        return{ ...state,error:action.error,isLoading:false}
      }

      default:
        return state;
       
    }
}

const Show = () => {
  let isMounted = true;
  const { id } = useParams();
  //id gives us the id that is in the url

  // const [show, setShow] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  const[{show,isLoading,error},dispatch]=useReducer(reducer,initialState)

useEffect(()=>{
    let isMounted=true;
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
    .then((results) => {
      if (isMounted) {

        dispatch({type:"FETCH_SUCCESS",show:results})
        // setShow(results);
        // setIsLoading(false);
      }
    })
    .catch((err) => {
      if (isMounted) {

        dispatch({type:"FETCH_FAILED",error:err.message})
        // setError(err.message);  
        // setIsLoading(false);
      }
    });

    return()=>{
        isMounted=false;
    }

    //we use callback function to ensure that isMounted changes only after .then or .catch method is executed 
    // apiGet method 
},[id])
  
 if(isLoading){
   return(<div>data is being loaded </div>)
 }
 if(error){
   return(<div>Error Occured{error}</div>)
 }

 return<div>this is show page </div>
};
export default Show;
