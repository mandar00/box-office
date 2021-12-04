import React from 'react'

const Star=({isActive}) =>{
    console.log(isActive)
    const active={
        color:'#f9ca24'
    }
    const inactive={
        color:'#c7ecee'
    }
return(
    <>
    <i className="fa fa-star" style={isActive?active:inactive}></i>
   
    </>)
}
export default Star