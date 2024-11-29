import { useContext } from "react";
import { FetchContext } from "../contexts/FetchContext";

export default function AppHeader() {

    // logic
    const { searchContent, setSearchContent, setUserInput } = useContext(FetchContext);

    // Funzione per gestire la ricerca del film
    function handleSearchSubmit(e) {
        e.preventDefault();
        setUserInput(searchContent);
        setSearchContent("");
    };


    // render
    return (
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
    );
};