import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import './App.css';
import { Link } from 'react-router-dom';

const URL = `https://pokeapi.co/api/v2/generation/`;


const PokemonCard = ({ generationId }) => {

  const [pokemon, setPokemon] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      
      getPokemon(URL + generationId);
      setDataLoaded(true);
    }
  }, [ dataLoaded]);

  async function getPokemon(URL) {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setPokemon(data.pokemon_species.slice(0, 5));
    } catch (error) {
      console.error("Error", error);
    }
  }

  function getImageSrcFromIndex(index) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  }

  function getIndexFromUrl(url) {
    const parsedUrl = url.split('/');
    return parsedUrl[parsedUrl.length - 2];
  }

  function showAllPokemons() {
    fetch(URL + generationId)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.pokemon_species); 
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  

  return (
    <div className="row mx-auto" style={{ display: "flex", justifyContent: "center" }}>
        
        <ul className="my-3 d-flex mx-auto w-75 p-0 overflow-auto overhidden">
            {pokemon.map((pokemon, index) => (
              <li key={index + 1} className="ms-2 list-group-item">
                <div class="card h-100">
                  <img src={getImageSrcFromIndex(getIndexFromUrl(pokemon.url))} class="card-img-top " alt="..." height={150}/>
                  <div class="card-body">
                    <a href={`/pokemon/${pokemon.name}`} class="btn btn-primary w-100 text-capitalize fw-semibold">{pokemon.name}</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    <div className="h-100 text-center align-middle m-auto">
        <Button 
        className="btn-secondary mx-5 "
        onClick={showAllPokemons}
        name="Voir Plus"/>
    </div>
</div>



  );
};

export default PokemonCard;
