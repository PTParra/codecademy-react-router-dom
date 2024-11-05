import { NavLink } from "react-router-dom";
import { NameCard } from "../components/nameCard";
import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";


export const ItemPage = () => {

    const {page} = useParams();

    const offset = page * 20;

    const { data: itemsData, isLoading: loading} = usePokeapi(`item?offset=${offset}&limit=20`);

    return(
        <section>
            <h1>Items section</h1>
            {loading ? <p>Loading...</p> : <>
                <div>
                    {itemsData.previous !== null ? <NavLink style={{marginRight: "1em"}} to={`/items/${+page - 1}`}>PREVIOUS</NavLink> : ""}
                    {itemsData.next !== null ? <NavLink to={`/items/${+page + 1}`}>NEXT</NavLink> : ""}
                </div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>{
                itemsData.results.map((item, index) => <NameCard key={index} id={(index + 1) + offset}
                title={item.name} url={`/item/${(index + 1) + offset}`} />)
                }
                </div>
            </>
            }
            
        </section>
    )
}