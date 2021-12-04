import React, { useEffect ,useState } from 'react'
import MainPage from "./MainPage"
import {useShows} from "../misc/CustomHooks"
import {apiGet} from '../misc/Config'
import ShowGrid from './Shows/ShowGrid'

const Stared=() =>{

    const [starred]=useShows();
    console.log(starred)
    console.log(typeof(starred))
    console.log(starred.length)

    const [show ,setShow]=useState(null);
    const [isLoading ,setIsLoading]=useState(true);
    const [error ,setError]=useState(null);


    useEffect(()=>{
        if(starred && starred.length >0){
            const promises=starred.map(showId=>apiGet(`shows/${showId}`))
            Promise.all(promises)
            .then(apiData=>apiData.map(show=>({show})))
            //as when we get data from apiGet(search/shows?=q=f) we get an object with an obj named show init so to keep the format same we need  to name each obj in results as shows
            //results =[
            // show:{....}
            // show:{....}
            // ]
            .then(results=>{
                console.log(results)
                setShow(results)
                setIsLoading(false)
                setError(null)
            })
            .catch(err=>{
                setError(err.message)
                setIsLoading(false);
            })
        }
        
    },[starred])
    console.log(show)
    return <MainPage>
    {isLoading &&  <div>data is loading</div>}
    {error && <div>error has occured :{error}</div>}
    {!isLoading && !show && <div>no shows Starred</div>}
    {!isLoading && !error && show && <ShowGrid data={show}/>}
    </MainPage>
}

export default Stared