import queryStinrg from 'query-string'
import {  useLocation } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';

export const SearchScreen = () => {

    const location = useLocation();   //extrae el url
    const { q } = queryStinrg.parse(location.search)  //divide cada query del url (en este caso, solo se ocupa el q (nombre del query q se determino en la funcion handleSearch (en este caso q))). Se pone q="" por si el valor es vacio, no me tire un undefined 

    return (
        <>
                    <h1>Search Screen</h1>
                    <hr />
                    <div className='row'>
                        <SearchForm q={q} />
                        <SearchResult q={q} />
                    </div>
        </>
    )
}
