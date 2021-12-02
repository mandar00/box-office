import React from "react";

const Seasons = ({ seasons }) => {
  // console.log(seasons)
  return (
    <>
      <div>
        <div className="readMoreSeasonsNo">
          <p>Total No of Seasons:<span>{seasons.length}</span></p>
        </div>
        <div className="readMoreEpisodeNo">
          <p>Total no of Episodes:<span>{seasons.reduce((acc, seasons) =>  acc + seasons.episodeOrder, 0)}</span></p>
        </div>
        <div className="readMoreSeasonMap">
          {seasons.map((val, id) => {
            return (
              <div key={id}>
                <p>Season:<span>{val.number}</span></p>
                <p>episodes:<span>{val.episodeOrder}</span></p>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Seasons;
