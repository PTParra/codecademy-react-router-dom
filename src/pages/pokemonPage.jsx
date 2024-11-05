import { NavLink } from "react-router-dom";
import { NameCard } from "../components/nameCard";
import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";


export const PokemonPage = () => {

    const {page} = useParams();

    const offset = page * 20;

    const { data: pokemonData, isLoading: loading} = usePokeapi(`pokemon?offset=${offset}&limit=20`);

    return(
        <section>
            <h1>Pokemon section</h1>
            {loading ? <p>Loading...</p> : <>
                <div>
                    {pokemonData.previous !== null ? <NavLink style={{marginRight: "1em"}} to={`/pokemons/${+page - 1}`}>PREVIOUS</NavLink> : ""}
                    {pokemonData.next !== null ? <NavLink to={`/pokemons/${+page + 1}`}>NEXT</NavLink> : ""}
                </div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>{
                pokemonData.results.map((pokemon, index) => <NameCard key={index} id={(index + 1) + offset}
                title={pokemon.name} url={`/pokemon/${(index + 1) + offset}`} />)
                }
                </div>
            </>
            }
            
        </section>
    )
}