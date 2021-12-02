import React from 'react'

const Details=({status,premiered,network}) =>{
return(
    <>
    <div className="readMoreDetailsDiv">
      <div className="detailsStatus">
        <h2>Details</h2>
        <p>Status:<span>{status}</span></p>
      </div>
      <div >
        Premiered:{premiered} {network? `on ${network.name}`:null}
      </div>
    </div>
    </>)
}
export default Details