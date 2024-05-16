import  "./index.css"
function Titulo(props){
    return(
        <h1 className="titlle">
            {props.texto}
        </h1>
    )
}

export default Titulo;