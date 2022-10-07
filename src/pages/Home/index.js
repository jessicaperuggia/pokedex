import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css'

function Home() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(()=>{

    async function getPokemon(){
      const response = await api.get('');
      setPokemon(response.data.results.slice(0,10));
    }

    getPokemon();
  }, [])

  return(
    <div className='pokelist'>
      <h1>Bem vindo a home</h1>
      {pokemons.map((pokemon) => {
        return(
          <div>
            <stron>{pokemon.name}</stron>            
          </div>
        )
      })}
    </div>
  )
}

export default Home;