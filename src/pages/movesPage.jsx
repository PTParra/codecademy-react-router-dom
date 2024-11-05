import { NavLink } from "react-router-dom";
import { NameCard } from "../components/nameCard";
import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";


export const MovesPage = () => {

    const {page} = useParams();

    const offset = page * 20;

    const { data: movesData, isLoading: loading} = usePokeapi(`move?offset=${offset}&limit=20`);

    return(
        <section>
            <h1>Moves section</h1>
            {loading ? <p>Loading...</p> : <>
                <div>
                    {movesData.previous !== null ? <NavLink style={{marginRight: "1em"}} to={`/moves/${+page - 1}`}>PREVIOUS</NavLink> : ""}
                    {movesData.next !== null ? <NavLink to={`/moves/${+page + 1}`}>NEXT</NavLink> : ""}
                </div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>{
                movesData.results.map((move, index) => <NameCard key={index} id={(index + 1) + offset}
                title={move.name} url={`/move/${(index + 1) + offset}`} />)
                }
                </div>
            </>
            }
            
        </section>
    )
}