import { ReactNode } from "react";

export interface Datainfo {
    name:string,
    url:string,
}
    
export interface Pokemon extends Datainfo{
    types:TypePokemon[]
}

export type LanguageOption = {
    select?:number;
}

export interface LanguageSelect{
    id:number,
    numberPokeAPI:number,
    name:string,
    abbreviation:string,
    image:ReactNode,
}

export interface TypePokemon{
    slot:number,
    type: Datainfo
}

   