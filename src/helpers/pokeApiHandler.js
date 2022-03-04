

export const simpleFetch = async (url) => {

    try {
        const pokemonsDetails = await fetch(url)
        const data  = await pokemonsDetails.json()

        return data

    } catch (error) {
        console.log(error)
    }
}


export const fetchPokemonList = async (pokemon_Endpoint = 'pokemon?limit=151') => {

    const url = `https://pokeapi.co/api/v2/${pokemon_Endpoint}`

    return await simpleFetch(url)
}


export const fetchPokemonDetails = async(pokemonList) => {

    const pokemonDetails = pokemonList.map((pokemon) => (

        new Promise((resolve) => {
            const details = simpleFetch(pokemon.url)
            resolve(details)
        })
    ))
    
    const values = await Promise.all(pokemonDetails)

    return values

}


export const startFetchingPokemonDetails = async(pokemon_Endpoint) => {
    
    const pokemonList = await fetchPokemonList(pokemon_Endpoint)
    return await fetchPokemonDetails(pokemonList.results)
}