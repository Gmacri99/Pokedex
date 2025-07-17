
export interface DataBasic{
    name:string,
    url:string,
}

export interface TypePokemon{
    slot:number,
    type:DataBasic,
}



export interface Pokemon extends DataBasic{
    type:TypePokemon,
    id:string,
}


export interface PokemonDetails extends Pokemon{

}