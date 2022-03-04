import React, { useContext } from 'react'
import { Link, NavLink, useNavigate  } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const pokelogo = './assets/Pokémon_logo.png'

    const { user: { name }, dispatch } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleLogout = () => {

        const action = {
            type: types.logout
        }

        dispatch(action);
        navigate('/login', {
            replace: true //remplaza el link por el que se esta poniendo aqui, entonces al retroceder en la pagina siguiente, no vulve a aparecer la pagina actual
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                <img src={pokelogo} alt={'pokelogo'} style={{height:"50px"}}></img>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
               
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        1st Gen
                    </NavLink>

                   

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{flexBasis: "content"}}>
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info">
                        {
                            name
                        }
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}