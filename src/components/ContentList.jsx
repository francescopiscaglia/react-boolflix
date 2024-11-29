import { useContext } from "react"
import { FetchContext } from "../contexts/FetchContext.jsx"
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";



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

export const ContentList = () => {
    // logic

    // Utilizzo del contesto per accedere ai dati e alle funzioni necessarie
    const { data, searchContent, setSearchContent, setUserInput } = useContext(FetchContext)

    // Funzione per gestire la ricerca del film
    function handleSearchSubmit(e) {
        e.preventDefault();
        setUserInput(searchContent);
        setSearchContent("");
    };

    // render
    return (
        <>
            <header>

                <img src="/logo.png" alt="" />

                {/* Ricerca film */}
                <form onSubmit={handleSearchSubmit}>

                    {/* Input per la ricerca dei contenuti */}
                    <input
                        type="search"
                        placeholder="Search..."
                        value={searchContent}
                        onChange={e => { setSearchContent(e.target.value) }}
                    />
                    {/* Pulsante per avviare la ricerca */}
                    <button
                        type="submit"
                    >Cerca</button>

                </form>

            </header>

            <main>

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
                                    <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
                                ))}

                                {/* Creo un array della lunghezza del voto / 2 poi ci ciclo per stmpare le stelle vuote */}
                                {Array.from({ length: Math.floor((10 - movie.vote_average) / 2) }).map((_, index) => (
                                    <FontAwesomeIcon key={`empty-${index}`} icon={faStarEmpty} />
                                ))}

                            </li>
                        ))
                    ) : (
                        <li>No movies found</li>
                    )}

                </ul >

            </main>

            <footer>
                <p>© 2024 - All Rights Reserved</p>
            </footer>
        </>
    );
};