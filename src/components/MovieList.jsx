import { useContext, useState } from "react"
import { FetchContext } from "../contexts/FetchContext.jsx"
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const languageFlag = {
    it: "IT",
    en: "US",
    fr: "FR",
    es: "ES",
    ja: "JP",
    gb: "GB",
    de: "DE",
    cn: "CN",
    ko: "KR",
    ru: "RU"
};

export const MovieList = () => {
    // logic

    // Utilizzo del contesto per accedere ai dati e alle funzioni necessarie
    const { data, searchMovie, setSearchMovie, setUserInput } = useContext(FetchContext)

    // Funzione per gestire la ricerca del film
    function handleSearchClick(e) {
        e.preventDefault();
        setUserInput(searchMovie)
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
                            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                            <h5>{movie.title ? movie.title : movie.name}</h5>
                            <p>{movie.original_title ? movie.original_title : movie.original_name}</p>
                            <p>
                                <ReactCountryFlag
                                    countryCode={languageFlag[movie.original_language] || "US"}
                                />
                            </p>

                            {/* Creo un array della lunghezza del voto / 2 poi ci ciclo per stmpare le stelle */}
                            {Array.from({ length: Math.ceil(movie.vote_average / 2) }).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </li>
                    ))
                ) : (
                    <li>No movies found</li>
                )}

            </ul >
        </>
    );
};