import  { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

export const PokeApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(user))

    }, [user])


    return (
        

            <AuthContext.Provider value={{ user, dispatch }}> {/* AuthContext es para hacer cotrol de usuarios, para que si alguien aun no ha hecho login, no pueda ir a otro url de la pagina, aparete de la pagina de login */}

                <AppRouter />

            </AuthContext.Provider> //.Provaider es para compartir la info de value en todos los hijos de AppRouter y demas que esten entre estos elementos <></>*/}

        
    )
}
