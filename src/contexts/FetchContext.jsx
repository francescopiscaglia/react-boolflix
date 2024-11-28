import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext()

export const FetchProvider = ({ children }) => {
    // Creo lo stato iniziale
    const [data, setData] = useState([])
    // Creo l'url da cui prelevare i dati
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=9099ad3a06ad840a484b4b495d6d8e4b&query=ritorno al fut'

    // Creo l'useEffect che mi permette di prelevare i dati dall'url
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(results => {
                console.log(results);
                setData(results.results)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        // Creo il provider che mi permette di passare i dati a tutti i componenti figli
        <FetchContext.Provider value={{ data, setData }}>
            {children}
        </FetchContext.Provider>
    );
};

