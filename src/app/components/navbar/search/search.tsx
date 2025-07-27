'use client'

import { apiRequest } from '@/app/helpers/request/getData';
import  './styles.css'
import { useEffect, useState } from 'react';
import { ContainerResults } from './searchResults/containerResults';
import { Pokemon } from '@/app/types/Pokemons';
import { useAppContext } from '@/app/context/context';


export const  Search = () => {

  const [name,setName] = useState<string>('')

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonsFilter, setPokemonsFilter] = useState<Pokemon[]>()
  
  

  useEffect(()=>{

    const getDataPokemon = async ():Promise<Pokemon[]> => {

    const resultado = await apiRequest('getAllPokemon')
    const pokemonsData: Pokemon[] = [];

      for(let i=0; i < resultado.results.length; i++){
          
          
      }
      setPokemons(resultado.results)
      return pokemonsData

    }

    getDataPokemon()
    
  },[])



  const handleChange = async (event:React.ChangeEvent<HTMLInputElement>) =>{
    
    setName(event.target.value)

    if(event.target.value !== ''){

    const text=event.target.value.toLowerCase()

    const response:Pokemon[] = []

    const data=pokemons?.filter((el)=> el.name.toLowerCase().includes(text))

    for(let i = 0; i < data?.length && i < 3; i++ ){
      const existing = pokemonsFilter?.find(
        (p) => p.name.toLowerCase() === data[i].name.toLowerCase()
      );

      if (existing) {
        response.push(existing); 
      }else{
      const dataInfo = await apiRequest('getPokemon',data[i].name)
          const dataDetails:Pokemon = {
            name:dataInfo.name,
            type:dataInfo.types,
            id:dataInfo.id,
            url:dataInfo.sprites.other['official-artwork'].front_default
          }
          response.push(dataDetails);
    }  
  }
    setPokemonsFilter(response)
    console.log(event.target.value)
    }else{
    setPokemonsFilter([])
    }
  }


  

  return (
    <>
    <div className='searchBar'>
      <div className='ContainerFormStyles'>
        <form className='FormStyles'>
          <div className='FormStyles-container '>
            <input className='FormStyles-input FormStylesBg__light'  type="text" placeholder='Search a pokémon' value={name}  onChange={handleChange}/>
          </div>
        </form>
        {
          pokemonsFilter?.length > 0 ?
          <ContainerResults data={pokemonsFilter}/> : null
        }
      </div>
    </div>
    </>
  );
}
