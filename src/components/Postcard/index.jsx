import React from "react";
import './postcard.css'
function Postcard(props){
    
    return(
        <div className='post'>
            <img src={props.url} alt ={props.title}></img>
                <div key={props.id} className="post-content">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                </div>
         </div>
    )
}

export default Postcard;