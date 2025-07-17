import { routeAPI } from "@/app/const/Routes";
import axios from "axios";

export const getAllPokemons = async () =>{
    try {
        const response = await axios.get(routeAPI.AllPokemon)
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null
    }
}

export const getPokemon = async (name:string) =>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null
    }
}



export const getLanguage = async (id:number=1) =>{
    try {
        const response = await axios.get(routeAPI.Language + id)
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null
    }
}


export const apiRequest = async (Request:any,body?:any) => {
    switch (Request) {
        case 'getAllPokemon':
        return getAllPokemons()

        case 'getPokemon':
        return getPokemon(body)
    }
}