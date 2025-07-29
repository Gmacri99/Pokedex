import React from "react";

export interface DataBasic{
    name:string,
    url:string,
}

export interface TypePokemon{
    slot:number,
    type:DataBasic,
}



export interface Pokemon extends DataBasic{
    type:TypePokemon[],
    id:string,
}

export type Item = {
  name: string;
  svg: React.ReactNode;
};
