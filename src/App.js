import { useEffect,useState } from "react";
import Imgtitle from "./img/Icon_header.png";
import Card from "./components/PokemonCard";
import Header from "./components/header";
import Nav from "./components/nav";
import './App.css';

const App=()=> {

  const[Pokemons,SetPokemons]=useState([])
  const[getPokemons,setGetPokemons]=useState(`https://pokeapi.co/api/v2/pokemon?limit=20`)

  const allPokemons= async ()=>{
    const res= await fetch(getPokemons)
    const data= await res.json()

    setGetPokemons(data.next)

    function createPokemon (results){
      results.forEach( async pokemon =>{
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        SetPokemons(currentList=> [...currentList, data])
        await Pokemons.sort((a, b) => a.id - b.id)
      })
    } 
    createPokemon(data.results)
  }

  useState(()=>{
    allPokemons()
  },[])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    
  return (
    <div className="App">
      <div><Header image={Imgtitle} title="Pokedex" imagef={Imgtitle}/></div>
      <div><Nav></Nav></div>
      <div className="container">
      { Pokemons.map((pokemon,index) => <Card id={pokemon.id} name={capitalizeFirstLetter(pokemon.name)} 
      image={pokemon.sprites.other.home.front_default} 
      type={pokemon.types.length === 1 ? <div className="type-pok"><p className={`type type-${pokemon.types[0].type.name}`}>{capitalizeFirstLetter(pokemon.types[0].type.name)}</p></div> : <div className="type-pok"><p className={`type type-${pokemon.types[0].type.name}`}>{capitalizeFirstLetter(pokemon.types[0].type.name)}</p><p p className={`type type-${pokemon.types[1].type.name}`}>{capitalizeFirstLetter(pokemon.types[1].type.name)}</p></div>} key={index} 
      type1={pokemon.types[0].type.name}/>)}
      </div>
    </div>
  );
}

export default App;

