import React from 'react'
import ShowCard from './ShowCard'
import Img_not_found from "../../images/img_not_found.png"

const ShowGrid=({data}) =>{
return(<> 

<div className="ShowGrid">

    {data.map(({show})=>{
        return(
            <ShowCard 
            key={show.id} 
            id={show.id} 
            name={show.name} 
            image={show.image?show.image.medium:Img_not_found} 
            summary={show.summary}/>
        )
    })}
</div>
 </>)
}
export default ShowGrid