import "./index.css"

function Butao(props){
    return(
        <div>
            <button className="butao" onClick={props.funcao}>Clique aqui</button>
        </div>
    )
}

export default Butao;