import React from "react";
import Img_not_found from "../../images/img_not_found.png";

const ShowMainData = ({ image, name, summary, rating, tags }) => {
  return (
    <>
      <div className="readMoreMainData">
        <div className="readMoreImg">
          <img
            src={image ? image.medium : Img_not_found}
            alt="show_cover"
          ></img>
        </div>

        <div className="readMoreNameRating">
          <div className="readMoreName">
          {name}
          </div>

          <div className="readMoreRating">
            <i className="far fa-star"></i>
            {rating.average ? rating.average : "null"}
          </div>
        </div>

        <div
          className="readMoreSummary"
          dangerouslySetInnerHTML={{ __html: summary }}
        >
          {/* dangerouslyusedhtml means data in summary  is in html form so to use obj data as html markup we use dangerousely used html  */}
        </div>

        <div className="readMoreTags">
        <p>Tags:</p>
          {tags.map((val, i) => {
            return <p key={i}>{val}</p>;
          })}
        </div>
      </div>
    </>
  );
};
export default ShowMainData;
