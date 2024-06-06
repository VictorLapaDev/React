import "./index.css" 
import React, { useEffect, useState } from "react";

function SearchBar({ onCitySelect }) {
  const [districts, setDistricts] = useState([]);
  const [teste, setTeste] = useState();

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/distritos"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar distritos de São Paulo");
        }
        
        const data = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error("Erro:", error.message);
      }
    };

    fetchDistricts();
  }, []);


  return (
    <div>
      <select className="input" onChange={value => setTeste(value)}>
        {districts.map((district) => (
          <option key={district.id} value={district.nome}>
            {district.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
