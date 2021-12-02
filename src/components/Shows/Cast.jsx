import React from 'react'
import Img_not_found from "../../images/img_not_found.png";


const Cast=({cast}) =>{
  console.log(cast)
return(
    <>
    <h1>Cast</h1>
      <div>
        {cast.map(({person,character},id)=>{
          
            return(
              <div className="readMoreCast" key={id}>
            <div className="readMoreSingleCast" >
              <img src={person.image?person.image.medium:Img_not_found} alt="cast_person"></img>  <p>{person.name}:{character.name}</p>
            </div>
            
          </div>
          
            )
        })}
      </div>
    </>)
}
export default Cast