import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

import NavBar from './components/Navbar';

function RoutesApp() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/pokemon/:id' element={ <Pokemon/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;