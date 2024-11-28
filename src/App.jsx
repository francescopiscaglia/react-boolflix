import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import { useState } from 'react';
import { FetchContext, FetchProvider } from './contexts/FetchContext.jsx';
import { MovieList } from './components/MovieList.jsx';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <FetchProvider>
        <MovieList />
      </FetchProvider>
    </>
  );
};

export default App
