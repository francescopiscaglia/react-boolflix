import { useContext } from "react";
import { FetchContext } from "../contexts/FetchContext";
import { Link, useNavigate } from "react-router-dom";

export default function AppHeader() {

    // logic
    const { searchContent, setSearchContent, setUserInput } = useContext(FetchContext);
    const navigate = useNavigate()

    // Funzione per gestire la ricerca del film
    function handleSearchSubmit(e) {
        e.preventDefault();
        setUserInput(searchContent);
        setSearchContent("");
        navigate("/library")
    };


    // render
    return (
        <header>

            <Link to="/">
                <img src="/logo.png" alt="" />
            </Link>


            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="🔍 Search..."
                    aria-label="Search"
                    onChange={e => { setSearchContent(e.target.value) }}
                />
                <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>

        </header>
    );
};