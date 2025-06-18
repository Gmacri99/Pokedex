
import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/hero'
import Navbar from './components/navbar/Index'
import SearchBar from './components/navbar/pokeSearch'
import { getAllPokemons, getPokemon } from './helpers/getData'
import { Datainfo, Pokemon } from './interfaces/interfaces'

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [allPokemons, setAllPokemons]= useState<Datainfo[]>([])

  const getCapitalize = (name:string):string =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const fetchAllPokemons = async () => {
      const info = await getAllPokemons();        
      setAllPokemons(info?.results)  
    };

    const fetchDetailsPokemons = async () => {
      for (let i = 0; i < allPokemons?.length; i++) {
          const responsePokemon = await getPokemon(allPokemons[i]?.name)
          const Pokemon = {
              name:getCapitalize(responsePokemon?.name),
              url:responsePokemon?.sprites.other.home.front_default,
              types:responsePokemon?.types
          }
          setPokemons(prev => [...prev, Pokemon]);
      }

    };
  

  useEffect(()=>{
      fetchAllPokemons();
  },[])

  useEffect(()=>{
      fetchDetailsPokemons();
  },[allPokemons])


  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
