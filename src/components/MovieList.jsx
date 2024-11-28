import { useContext, useState } from "react"
import { FetchContext } from "../contexts/FetchContext.jsx"

export const MovieList = () => {
    // logic

    // Utilizzo del contesto per accedere ai dati e alle funzioni necessarie
    const { data, searchMovie, setSearchMovie } = useContext(FetchContext)

    // Funzione per gestire la ricerca del film
    function handleSearchClick(e) {
        e.preventDefault();
    };

    // render
    return (
        <>
            {/* Ricerca film */}
            <form onSubmit={handleSearchClick}>

                <input
                    type="search"
                    placeholder="Search..."
                    value={searchMovie}
                    onChange={e => { setSearchMovie(e.target.value) }}
                />
                <button
                    type="submit"
                >Cerca</button>

            </form>

            {/* Lista film */}
            <ul>

                {data.length > 0 ? (
                    data.map((movie) => (
                        <li key={movie.id}>
                            {movie.original_title}
                        </li>
                    ))
                ) : (
                    <li>No movies found</li>
                )}

            </ul>
        </>
    );
};