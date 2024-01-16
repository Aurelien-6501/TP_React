
import PokemonCard from "./PokemonCard";
import GenerationList from '../GenerationList';

const URL = "https://pokeapi.co/api/v2/generation"



function GenerationPokemon(props) {

    return (
        <div>
      {GenerationList.map((generation) => (
        <div className='Home row mx-auto' key={generation.id}>
          <h2>{generation.name}</h2>
          <PokemonCard generationId={generation.id} />
        </div>
      ))}
    </div>
        
    );
}

export default GenerationPokemon;