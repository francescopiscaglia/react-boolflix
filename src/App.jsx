import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import { FetchProvider } from './contexts/FetchContext.jsx';
import { MovieList } from './components/MovieList.jsx';

function App() {

  return (
    <>
      <FetchProvider>
        <MovieList />
      </FetchProvider>
    </>
  );
};

export default App
