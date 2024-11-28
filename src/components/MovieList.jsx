import { useContext } from "react"
import { FetchContext } from "../contexts/FetchContext.jsx"

export const MovieList = () => {
    const { data } = useContext(FetchContext)
    console.log(data)


    return (

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




    );
};