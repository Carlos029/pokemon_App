import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';


export const PokemonScreen = () => {

    const params = useParams();   //para extraer los parametros que vayan en el url ( lo vamos a usar para extraer pokemon.id)
    const { pokemonId } = params;
    const navigate = useNavigate();

    const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)



    if (!pokemon && !loading) {
        return <Navigate to='/' />
    } //if que si el url esta malo o no existe el pokemon, lo redirecciona a la pagina '/'


    const {
        id,
        name,
        sprites,
        height,
        weight,
        types
    } = !loading && pokemon;


    const handleReturn = () => {

        navigate(-1); //se devulve a la pagina anterior
    }

    return (

        <>

            {!loading &&

                <div className="row mt-5">
                    <div className="col-4">
                        <img
                            src={sprites.other['official-artwork'].front_default}
                            alt={name}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        ></img>
                    </div>

                    <div className="col-8">
                        <h3>{name} # {id}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <b>Height:</b> {height * 10} cm</li>
                            <li className="list-group-item"> <b>Weight:</b> {weight / 10} kg</li>
                        </ul>
                        <br />
                        <h5>Types</h5>
                        <ul>
                            {types.map(type => (
                                <li key={type.slot}> {(type.type.name)} </li>
                            ))}
                        </ul>

                        <button
                            className="btn btn-outline-info"
                            onClick={handleReturn}
                        >
                            Return
                        </button>
                    </div>

                </div>

            }
        </>


    )
}
