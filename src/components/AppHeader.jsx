import { useContext } from "react";
import { FetchContext } from "../contexts/FetchContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function AppHeader() {

    // logic
    const { searchContent, setSearchContent, setUserInput } = useContext(FetchContext);
    const navigate = useNavigate()

    // Funzione per gestire la ricerca del film
    function handleSearchSubmit(e) {
        e.preventDefault();
        setUserInput(searchContent);
        navigate("/library")
        setSearchContent("");
    };


    // render
    return (
        <header>

            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src="logo.png" alt="logo" />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/film" className="nav-link" >Film</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tvseries" className="nav-link">Serie TV</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="🔍 Search..."
                    aria-label="Search"
                    value={searchContent}
                    onChange={e => { setSearchContent(e.target.value) }}
                />
                <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>

        </header>
    );
};