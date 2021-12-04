import React from 'react'
import { NavLink } from 'react-router-dom'
import Star from "../Star"


const ShowCard=({id,name,image,summary,onStarClicked,isStared}) =>{

    const summary_as_text=summary
    ?`${summary.split(' ').slice(0, 10).join(' ').replace(/<.>+?/g ,'').replace(/[</.>]+?/g,'')}...`
    :"No Description"
return(<> 

    <div className="ShowCard">
        <div className="ShowCard_img">
            <img  src={image} alt="no img"></img>
            {console.log(image)}
        </div>
        <h1>
            {name}
        </h1>
        <p>
            {summary_as_text}
        </p>
        <div className="link_n_btn">
            <NavLink activeclassname="active" to={`shows/${id}`}>Read more..</NavLink>
            <button className="starButton" type="button" onClick={onStarClicked} >
            <Star
                isActive={isStared}
            />
            </button>
        </div>
    </div>

 </>)
}
export default ShowCard