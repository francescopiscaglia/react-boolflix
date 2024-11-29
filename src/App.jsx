import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FetchProvider } from './contexts/FetchContext.jsx';
import { ContentList } from './components/ContentList.jsx';
import AppHeader from './components/AppHeader.jsx';

function App() {

  return (
    <>
      <FetchProvider>
        <AppHeader />
        <ContentList />
      </FetchProvider>
    </>
  );
};

export default App
