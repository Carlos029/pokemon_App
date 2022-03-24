import { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogin = () => {


        const action = {
            type: types.login,
            payload: {
                name: "Carlos"
            }
        }
        dispatch(action);


        const lastPath = localStorage.getItem("lastPath") || "/" // al logearse, tira al user en la ultima pagina q visito, y si no existe (nunca ha visitado la pagina), lo tira a la pagina principal 

        navigate(lastPath, {
            replace: true //remplaza el link por el que se esta poniendo aqui, entonces al retroceder en la pagina siguiente, no vulve a aparecer la pagina actual
        });

    }


    return (
        <div className="container mt-5" >
            <h1>Login</h1>
            <hr />


            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
