import { useFetch } from '../../hooks/useFetch';
import { PokeCard } from '../pokemon/PokeCard';


export const SearchResult = ({ q }) => {

    const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${q}`)

    return (
        <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
                (!q)
                    ? <div className="alert alert-info"> Search a pokemon </div>
                    : (loading)
                        ? <div className="alert alert-info"> Searching... </div>
                        : (!pokemon) && <div className="alert alert-danger"> there's no pokemon with name or id ={'> '} {q}</div>
            }

            {
                (q !== "" && !loading && !!pokemon) &&

                <PokeCard pokemon={pokemon} />
            }

        </div>
    )
}
