import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="mainPageTitle">
        <h1>{title}</h1> 
        <p>{subtitle}</p>
      </div>
    </>
  );
};
export default Title;
