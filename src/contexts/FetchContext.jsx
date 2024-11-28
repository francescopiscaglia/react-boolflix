import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext()

export const FetchProvider = ({ children }) => {

    // Creo lo stato iniziale
    const [data, setData] = useState([])
    const [searchMovie, setSearchMovie] = useState('')
    const [userInput, setUserInput] = useState('')

    // Creo l'url da cui prelevare i dati
    const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=9099ad3a06ad840a484b4b495d6d8e4b&query=${userInput}`;

    const TVShowsUrl = `https://api.themoviedb.org/3/search/tv?api_key=9099ad3a06ad840a484b4b495d6d8e4b&language=it_IT&query=${userInput}`;


    // Creo l'useEffect che mi permette di prelevare i dati dall'url per i film
    useEffect(() => {

        setData([]) // Resetta lo stato prima di eseguire la nuova richiesta

        fetch(moviesUrl)
            .then(response => response.json())
            .then(results => {

                if (results.results) {
                    setData(prevData => ([...prevData, ...results.results])) // Aggiorna lo stato con i nuovi dati
                } else {
                    console.log("No data");
                }
            })
            .catch(err => {
                console.error(err);
                setData([]);  // Imposta un array vuoto in caso di errore
            })


        fetch(TVShowsUrl)
            .then(response => response.json())
            .then(results => {
                // console.log("Risultato API", results);
                if (results.results) {
                    setData(prevData => ([...prevData, ...results.results])) // Aggiorna lo stato con i nuovi dati
                    // console.log("Dati passati a setData", results.results);

                } else {
                    console.log("No data");
                }
            })
            .catch(err => {
                // console.error("Errore nella chiamata API:", err);  // Log degli errori
                setData([]);  // Imposta un array vuoto in caso di errore
            })
    }, [moviesUrl, TVShowsUrl]);

    return (
        // Creo il provider che mi permette di passare i dati a tutti i componenti figli
        <FetchContext.Provider value={{ data, setData, searchMovie, setSearchMovie, userInput, setUserInput }}>
            {children}
        </FetchContext.Provider>
    );
};

