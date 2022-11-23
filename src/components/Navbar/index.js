import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

  return(
    <div className="container">
      <Link to='/'><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo"/></Link>
        
    </div>
  )
}

export default Navbar;