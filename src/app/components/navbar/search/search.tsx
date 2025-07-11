'use client'

import { apiRequest } from '@/app/helpers/request/getData';
import  './styles.css'
import { useEffect, useState } from 'react';


export const  Search = () => {

  const [name,setName] = useState<string>('')


  const handleChange = (event) =>{
    setName(event.target.value)
  }

  const searchPokemon = async (event) =>{
    event.preventDefault()
    const resultado = await apiRequest('getPokemon', name)

    window.alert('nombre:' + resultado.name + '  ' + 'id:'+ resultado.id)
  }
  

  return (
    <>
        <form onSubmit={searchPokemon} className='container-search'>
            <input type="text" placeholder='prueba pokedex' value={name}  onChange={handleChange}/>
        </form>
    </>
  );
}
