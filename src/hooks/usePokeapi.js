import { useEffect } from "react";
import { useState } from "react";


export const usePokeapi = (params = "") => {

    const baseURL = "https://pokeapi.co/api/v2/";

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(baseURL + params);
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('ERROR:', error);
            }
        };

        fetchData();
    }, [params])



    return {data, isLoading};
}