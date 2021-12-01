import React from "react";

const Actorcard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <>
      <div className="ActorCard">
        <div className="ActorGrid_img">
          <img src={image} alt="actor"></img>
        </div>
        <h1>{name} {gender?`${gender}`:null}</h1>
        {/* null means it will not be displayed on the screen  */}
        <p>
            {country? `Comes from ${country}`:"no country known"}
        </p>
        <p>{birthday? `Born on ${birthday}`:null}</p>
        <p>
            {deathday? `Died on ${deathday}`:"Alive"}
        </p>
      </div>
    </>
  );
};
export default Actorcard;
