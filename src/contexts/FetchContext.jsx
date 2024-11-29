import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext()

export const FetchProvider = ({ children }) => {

    // Creo lo stato iniziale per i dati
    const [data, setData] = useState([]);
    // Creo lo stato iniziale per il valore dell'input di ricerca
    const [searchContent, setSearchContent] = useState('');
    // Creo lo stato iniziale per la ricerca che fa l'utente
    const [userInput, setUserInput] = useState('')
    // Creo lo stato iniziale per i popular film
    const [popular, setPopular] = useState([])

    // importo la chiave API
    const apiKey = import.meta.env.VITE_API_KEY

    // Creo l'url da cui prelevare i dati
    const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userInput}`;
    const TVShowsUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it_IT&query=${userInput}`;
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    // Creo l'useEffect che mi permette di prelevare i dati dall'url per i popular
    useEffect(() => {
        fetch(popularUrl)
            .then(response => response.json())
            .then(results => {
                if (results.results) {
                    setPopular(results.results)
                } else {
                    console.log("No data");
                }
            })
            .catch(err => {
                console.error(err);
                setPopular([]);
            })
    }, [popularUrl])



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
        <FetchContext.Provider value={{ data, setData, searchContent, setSearchContent, userInput, setUserInput, popular, setPopular }}>
            {children}
        </FetchContext.Provider>
    );
};

