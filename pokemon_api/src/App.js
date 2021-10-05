// / import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
    const [ pokemons, setPokemons ] = useState([]);

    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then(response => response.json()
        )
        .then(response => setPokemons(response.results))
      }, []);

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      
      <ul>
      {pokemons.length > 0 && pokemons.map(( pokemon, index)=> {
        let pname = capitalizeFirstLetter(pokemon.name);
        return (<li key={index}>{pname}</li>)
      })}
      </ul>
    
    </div>
  );
}

export default App;
