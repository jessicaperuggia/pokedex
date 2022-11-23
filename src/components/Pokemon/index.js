import { useState } from "react";
import  Axios  from "axios";

function Pokemon() {
 const [pokemonName, setPokemonName] = useState("");
 const [pokemonChosen, setPokemonChosen] = useState(false);
 const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
 });

 const searchPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => {
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      });
      setPokemonChosen(true);
    }
  );
 }
 
  return(
    <div className="search_section">
      <div className="title">
        <h1>Pokemon</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>Buscar Pokemon</button>
      </div>
      <div className="result_section">
          {!pokemonChosen ? (
            <h1>Por favor escolha um Pokemon</h1>
          ) : (
          <> 
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img}/>
            <h3>Espécie: {pokemon.species}</h3>
            <h3>Tipo: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Ataque: {pokemon.attack}</h4>
            <h4>Desfesa: {pokemon.defense}</h4>
          </> 
          )}
      </div>
    </div>
  )
}

export default Pokemon;