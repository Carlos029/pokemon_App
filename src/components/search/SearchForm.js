import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const SearchForm = ({q = ""}) => {

    const navigate = useNavigate();

    const [formValues, handleInputChanges] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.length === 0) {
            navigate(``);
            return
        }

        navigate(`?q=${searchText}`); //transforma el url para que contenga un parametro o un query 
    }


    return (
        <>

            <div className='col-5'>
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Find your pokemon"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChanges}
                    />

                    <button
                        type="submit"
                        className="btn m1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                </form>
            </div>

        </>
    )
}
