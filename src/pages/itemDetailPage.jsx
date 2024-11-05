import { useParams } from "react-router-dom";
import { usePokeapi } from "../hooks/usePokeapi";
import { ItemCard } from "../components/itemCard";


export const ItemDetailPage = () => {

    const {id} = useParams();

    const { data: itemData, isLoading: loading} = usePokeapi(`item/${id}`);

    const searchEnglishName = (languages) => {
        console.log(languages);
        let englishName = languages.filter((language) => {
            return  language.language.name === "en";
        })
        return englishName[0].name;
    }

    const searchEnglishText = (languages) => {
        console.log(languages);
        let englishName = languages.filter((language) => {
            return  language.language.name === "en";
        })
        return englishName[0].text;
    }
        
    return(
        <section>
            {loading ? <p>Loading...</p> : <ItemCard name={searchEnglishName(itemData.names)}
            sprite={itemData.sprites.default} description={searchEnglishText(itemData.flavor_text_entries)}/>
            }
            
        </section>
    )
}