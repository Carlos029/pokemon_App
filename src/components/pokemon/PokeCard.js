import { Link } from 'react-router-dom';

export const PokeCard = ({ pokemon }) => {


    const { id,
        name,
        sprites } = pokemon;

    return (

        <div className="card ms-3 animate__animated animate__zoomIn" style={{ maxWidth: 540 }}>

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={sprites.other['official-artwork'].front_default} className="card-img" alt={"pokemon"} style={{ height: "80%" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> #{id}</p>

                        <Link to={`/pokemon/${id}`}> 
                            More...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
