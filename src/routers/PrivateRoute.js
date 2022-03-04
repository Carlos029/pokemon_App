import React, { useContext } from 'react'
import { Navigate  ,useLocation} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoute = ({children}) => { //llama a la clases hijas

    const {user} = useContext(AuthContext) 

    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );// guarda la ultima pagina que visito por si se sale el user y vuelve a entrar, lo tire en la ultima pagina q visto

    return (

        user.logged ? children : <Navigate to='/login'/>
    )
}

