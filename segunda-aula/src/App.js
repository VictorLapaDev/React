import './App.css';
import Card from "./Components/Card"
import {useState} from "react"

function App() {
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
  const [contadorEstado, setContadorEstado] = useState(0);
  let contador = 0;

  const contaClique = () => {
    console.log(contador = contador+1);
  }
  
  return (
    <div className='App'>
      <button onClick={() => {setContadorEstado(contadorEstado + 1)}}>Clique Aqui</button>
      <h1>{contadorEstado}</h1>
      <button onClick={contaClique}>Clique aqui</button>
      <h1>{contador}</h1>
      {
        diasSemana.map((dia) =>{
          return(<Card diasSemana={dia}/>)
        })
      }
    </div>
  );
}

export default App;
