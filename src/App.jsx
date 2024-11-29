import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FetchProvider } from './contexts/FetchContext.jsx';
import { ContentList } from './components/ContentList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout.jsx';
import HomePage from './components/pages/HomePage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';

function App() {

  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/library' element={<ContentList />} />
              <Route path='/about' element={<AboutPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </FetchProvider>


    </>
  );
};

export default App
