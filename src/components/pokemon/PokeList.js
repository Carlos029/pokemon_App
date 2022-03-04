import { usePokeApi } from '../../hooks/usePokeApi'
import { PokeCard } from './PokeCard'

export const PokeList = () => {

    const { data, loading } = usePokeApi('pokemon?limit=151')

    return (
        <div className="card-columns" >

            {


                loading ?

                    <div style={{ width: '80vw', display: 'flex', justifyContent: 'space-around' }}>
                        <h1>Loading...</h1>
                    </div>

                    :

                    data.map((pokemon) => {
                        return <PokeCard key={pokemon.id}
                            pokemon={pokemon}
                        />
                    })
            }
        </div>
    )
}
