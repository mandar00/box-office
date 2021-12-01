import React from 'react'
import { NavLink } from 'react-router-dom'


const ShowCard=({id,name,image,summary}) =>{

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
            <NavLink activeClassName="active" to={`shows/${id}`}>Read more..</NavLink>
            <button type="button" > Add to Stared</button>
        </div>
    </div>

 </>)
}
export default ShowCard