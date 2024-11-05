import { PokemonCard } from "../components/pokemonCard";
import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";


export const PokemonDetailPage = () => {

    const {id} = useParams();

    const { data: pokemonData, isLoading: loading} = usePokeapi(`pokemon/${id}`);
        
    return(
        <section>
            {loading ? <p>Loading...</p> : <PokemonCard name={pokemonData.name}
            sprite={pokemonData.sprites.other['official-artwork'].front_default}
            abilities={pokemonData.abilities} types={pokemonData.types} />
            }
            
        </section>
    )
}