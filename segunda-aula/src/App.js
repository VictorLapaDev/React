import './App.css';
import Butao from './Components/Button';
import Card from "./Components/Card"
import SearchBar from './Components/SearchBar';

function App() {


  function search() {
    //Pegar o nome da cidade para ver a temperatura
    var local = document.getElementById("input").value;
    console.log(local);
  }

  

  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
  const tempSemana = [45, 23, 23, 54, 23, 12, 43];
  
  return (
    <div className='App'>


      <div className='search'>
        <SearchBar/>
      </div>
      
      <Butao funcao={search}></Butao>

      <div className='cards'>

      {
          diasSemana.map((dia, index) => {
            return (
              <Card key={index} diasSemana={dia} temperatura={tempSemana[index] + "º"} /*time={img[index]}*/ />
            );
          })

      }
      </div>


    </div>
  );
}

export default App;
