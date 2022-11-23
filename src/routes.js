import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';


import NavBar from './components/Navbar';

function RoutesApp() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;