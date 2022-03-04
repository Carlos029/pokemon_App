import React, { useContext } from 'react'
import { Navigate} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
  

export const PublicRoute = ({children}) => { //llama a la clases hijas

    const { user } = useContext(AuthContext);

    
    return user.logged
        ? <Navigate to="/1stGen" />
        : children
        // si esta logeado vaya a /marvel, sino vaya al componente hijo
}

