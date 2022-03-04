import React from 'react'
import { Route, Routes, Navigate  } from 'react-router-dom'
import { PokemonScreen } from '../components/pokemon/PokemonScreen'
import { Gen1_Screen } from '../components/gen_1/Gen1_Screen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar/>

            <div className="container mt-2">

                <Routes>

                    <Route  path="1stGen" element={<Gen1_Screen/>} />
                    <Route  path="pokemon/:pokemonId" element={<PokemonScreen/>} /> {/* con el " : " se refiere que va a recivir un argumento  por el url*/}
                    <Route  path="search" element={<SearchScreen/>}/>

                    <Route path="/*" element={<Navigate to='1stGen'/>} />  

                </Routes>

            </div>


        </>
    )
}
