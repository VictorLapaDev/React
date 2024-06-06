import './App.css';
import Card from "./Components/Card"
import SearchBar from './Components/SearchBar';
import tempo from "./Assets/tempo.png"
import React, { useState } from 'react';

function App() {  
  const [dados, setDados] = useState([]);

  function search() {
    var local = document.getElementsByClassName("input").item(0).value;
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${local}&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
    .then(resposta => resposta.json())
    .then(dados =>{
      console.log(dados)
        var temperaturas = [];

        for(var i = 3; i <= 35; i+=8){
             temperaturas.push((dados.list[i].main.temp).toFixed(0) + "ºC");
        }


        console.log(temperaturas);
        setDados(temperaturas);    
    })      
  }

  const diasSemana = ["Hoje", "Amanhã", "+2DIAS", "+3DIAS", "+4DIAS", "+5DIAS+", "+6DIAS"];

  return (
    <div className='App'>
      <div className='search'>
        <SearchBar/>
      </div>
      
      <button className='butao' onClick={search}>Clique aqui</button>

      <div className='cards'>
        {dados.map((temperatura, index) => (
          <Card key={index} temperatura={temperatura} diasSemana={diasSemana[index]} time={tempo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
