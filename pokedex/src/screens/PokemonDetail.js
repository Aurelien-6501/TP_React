import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const URL = `https://pokeapi.co/api/v2/pokemon/`;

const PokemonDetail = ({ name }) =>{
  
    const [pokemon, setPokemon] = useState([]);
    const params = useParams();
    
    async function fetchData(){
        const name = params.name;
        const response = fetch(URL + name);
        const data = await (await response).json();

        setPokemon(data);
    }    

    useEffect(() => {
       fetchData();
    }, []);


  return (
    <div>

      <h1 className="text-center">{pokemon.name}</h1>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  
  );

}
    
      
  

export default PokemonDetail;