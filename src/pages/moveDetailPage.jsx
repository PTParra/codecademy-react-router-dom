import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";
import { MoveCard } from "../components/moveCard";


export const MoveDetailPage = () => {

    const {id} = useParams();

    const { data: moveData, isLoading: loading} = usePokeapi(`move/${id}`);

    const searchEnglishName = (languages) => {
        let englishName = languages.filter((language) => {
            return  language.language.name === "en";
        })
        return englishName[0].name;
    }
        
    return(
        <section>
            {loading ? <p>Loading...</p> : <MoveCard name={searchEnglishName(moveData.names)}
            damageClass={moveData.damage_class.name} power={moveData.power} pp={moveData.pp}
            type={moveData.type.name}/>
            }
            
        </section>
    )
}