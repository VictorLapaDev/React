import Titulo from "../Titulo"
import "./index.css"
import tempo from "../../Assets/tempo.png"

function Card(props){
    return(
        <div className="card">
            <Titulo>22º</Titulo>
            <img src={tempo} alt="img" className="sol"></img>
            <h4 className="estado"><code>{props.diasSemana}</code></h4>
        </div>
    )
}

export default Card;