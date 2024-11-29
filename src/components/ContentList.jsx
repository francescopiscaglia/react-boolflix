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
    const { data } = useContext(FetchContext)


    // render
    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols row-cols-md-2 row-cols-lg-3 g-3">

                        {/* Lista film */}
                        {data.length > 0 ? (
                            data.map((movie) => (

                                <div className="col" key={movie.id}>
                                    <div className="card text-bg-dark">

                                        <img
                                            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                            alt={movie.title}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">

                                            <h5 className="card-title">{movie.title ? movie.title : movie.name}</h5>
                                            <p className="card-text">{movie.original_title ? movie.original_title : movie.original_name}</p>
                                            <p className="card-text">
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
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <h5 className="card-title">No movies found</h5>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};