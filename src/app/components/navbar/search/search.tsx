'use client'

import { apiRequest } from '@/app/helpers/request/getData';
import  './styles.css'
import { useEffect, useState } from 'react';
import { ContainerResults } from './searchResults/containerResults';
import { Pokemon } from '@/app/types/Pokemons';


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

  const handleClose = () =>{
    setPokemonsFilter([])
    setName('')
  }
  

  return (
    <>
    <div className='searchBar'>
      <div className='ContainerFormStyles'>
        <form className='FormStyles'>
          <div className='FormStyles-container'>
            <input className='FormStyles-input FormStylesBg__light'  type="text" placeholder='Search a pokémon' value={name}  onChange={handleChange}/>
            <span onClick={handleClose} className='FormStyles-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#384F7E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.2492 19.2502L15.2617 15.2627" stroke="#384F7E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </form>
        {         
          <ContainerResults status={pokemonsFilter && pokemonsFilter?.length > 0 ? true : false} data={pokemonsFilter && pokemonsFilter?.length > 0 ? pokemonsFilter : []}/>
        }
      </div>
    </div>
    </>
  );
}
