import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';



function RoutesApp(){
  return(
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filmes/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;