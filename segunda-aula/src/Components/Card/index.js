import "./index.css"
import React from "react";

function Card(props){
    return(
        <div className="card">
            <h1 className="titulo">{props.temperatura}</h1>
            <img src={props.time} alt="img" className="sol"></img>
            <h4 className="diasSemana"><code>{props.diasSemana}</code></h4>
        </div>
    )
}

export default Card;