import React from 'react'
import ShowCard from './ShowCard'
import Img_not_found from "../../images/img_not_found.png"
import {useShows} from '../../misc/CustomHooks'

const ShowGrid=({data}) =>{
    const[staredShows,dispatchStared]=useShows()
  
    console.log(data)
return(<> 

<div className="ShowGrid">
    {data.map(({show} )=>{
        {/* console.log(show.id) */}
        
        const isStared=staredShows.includes(show.id);
        const onStarClicked=()=>{
            if(isStared){
                dispatchStared({type:'REMOVE', showId:show.id})
            }
            else{
                dispatchStared({type:'ADD', showId:show.id})
            }
        }
        return(
            <ShowCard 
            key={show.id} 
            id={show.id} 
            name={show.name} 
            image={show.image?show.image.medium:Img_not_found} 
            summary={show.summary}
            onStarClicked={onStarClicked}
            isStared={isStared}
            />
        )
    })}
</div>
 </>)
}
export default ShowGrid