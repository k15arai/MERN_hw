import React, {useEffect, useState } from "react";
import axios from "axios"
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=1118";

const Pokemon = (props) => {
    const [ pokemons, setPokemons ] = useState([]);

    const capitalizeFirstLetter = (str) => {
        let result = str.charAt(0).toUpperCase() + str.slice(1);
        console.log(result);
        return result;
    };

    useEffect(()=> {
        axios.get(baseURL)
        .then((response)=>{setPokemons(response.data.results)})
    }, []);

    return (
        <div>
            <ul>
                {pokemons.length > 0 && pokemons.map(( pokemon, index)=> {
                    let pname = capitalizeFirstLetter(pokemon.name);
                    return (<li key={index}>{pname}</li>)
                })}     
            </ul>
        </div>
    )
}

export default Pokemon;