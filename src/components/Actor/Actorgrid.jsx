import React from 'react'
import Actorcard from "./Actorcard"
import Img_not_found from "../../images/img_not_found.png"


const Actorgrid=({data}) =>{
return(

    <>
    <div className="ActorGrid">

      {data.map(({person})=>{
         return(
            <Actorcard
              key={person.id}
              name={person.name}
              country={person.country?person.country:null}
              bithDay={person.birthday}
              deathDay={person.deathday}
              gender={person.gender}
              image={person.image?person.image.medium:Img_not_found}
              
          />
         )
      })}
    </div>
    </>)
}
export default Actorgrid