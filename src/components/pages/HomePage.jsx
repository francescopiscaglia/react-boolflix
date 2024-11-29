import { useContext } from "react";
import Jumbotron from "../Jumbotron";
import { FetchContext } from "../../contexts/FetchContext";

export default function HomePage() {
    const { popular } = useContext(FetchContext)

    // logic
    const pageTitle = "Popular";


    // render
    return (
        <>
            <div className="">
                <div className="row row-cols row-cols-md-2 row-cols-lg-3 g-3">

                    {/* Lista film */}
                    {popular.length > 0 ? (
                        popular.map((movie) => (

                            <div className="col" key={movie.id}>
                                <div
                                    className="card text-bg-dark"
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title ? movie.title : movie.name}</h5>
                                        <span className="card-text me-2">{movie.original_title ? movie.original_title : movie.original_name}</span>
                                        <p className="card-text overview">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h5 className="card-title">No movies found</h5>
                    )}
                </div>
            </div>
        </>
    );
};