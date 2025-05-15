import { useEffect, useState } from 'react'
import './style.css'
import { getAllPokemons, getPokemon } from '../../helpers/getData'
import { Datainfo, Pokemon } from '../../interfaces/interfaces'
import CardPokemon from './CardPokemon'

const HeroSection = ({name,url,types}:Pokemon) => {

   
  return (
    <div className='hero'>
        <CardPokemon name={name} url={url} types={types}/>
    </div>
  )
}

export default HeroSection