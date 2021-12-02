import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/Config";
import Cast from "./Shows/Cast";
import Details from "./Shows/Details";
import Seasons from "./Shows/Seasons";
import ShowMainData from "./Shows/ShowMainData";

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
  // let isMounted = true;
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
  console.log(show)
  // console.log(show._embedded)


  // if(show){
  //   return<div>{show.name}</div>
  // }
  if(isLoading){
    return(<div>the page is isLoading</div>)
  }

  if(error){
    return(<div>error occured {error}</div>)
  }

 return(
   <>
     <div>
       <ShowMainData
         //cant use show if isLoading  or error is not used prior to it 
         image={show.image}
         name={show.name}
         rating={show.rating}
         summary={show.summary}
         tags={show.genres}
         
       />
     </div>
     <div>
     {/* <h2>details</h2> */}
       <Details 
         status={show.status}
         network={show.network}
         premiered={show.premiered}
       />
     </div>
     <div>
       <Seasons 
       seasons={show._embedded.seasons}
       />
       {console.log(show._embedded.seasons)}

     </div>
     <div>
       <Cast 
       cast={show._embedded.cast}
       />
      
     </div>
     
   </>

 )
};
export default Show;
