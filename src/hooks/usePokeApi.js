import { useEffect, useRef, useState } from "react";
import { startFetchingPokemonDetails } from "../helpers/pokeApiHandler";


export const usePokeApi = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        startFetchingPokemonDetails(url).then(data => {

            if (isMounted.current) {

                setstate({
                    loading: false,
                    error: null,
                    data: data
                })


            } else {
                console.log('setState no se llamó');
            }

        })
    }, [url])

    return state;

}
