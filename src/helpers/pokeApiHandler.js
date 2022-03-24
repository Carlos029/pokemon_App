
// simply, it just fetch the data from the url
export const simpleFetch = async (url) => {

    try {
        const pokemonsDetails = await fetch(url)
        const data = await pokemonsDetails.json() //json return a promise, so data is a promise
        return data

    } catch (error) {
        console.log(error)
    }
}

//return the list with the name and a url about the details for each pokemons from 1st gen
export const fetchPokemonList = async (pokemon_Endpoint = 'pokemon?limit=151') => {

    const url = `https://pokeapi.co/api/v2/${pokemon_Endpoint}`


    return await simpleFetch(url)
}


export const fetchPokemonDetails = async (pokemonList) => {

    const pokemonDetails = pokemonList.map((pokemon) => ( //return a bunch of promises containing the data of each pokemon

         simpleFetch(pokemon.url)
    ))

    const values = await Promise.all(pokemonDetails) //waits for all the promises to get resolve

    return values //array with each pokemon details

}


export const startFetchingPokemonDetails = async (pokemon_Endpoint) => {

    const pokemonList = await fetchPokemonList(pokemon_Endpoint)

    return await fetchPokemonDetails(pokemonList.results)
}