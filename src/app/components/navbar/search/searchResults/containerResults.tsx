'use client'

import { Pokemon } from '@/app/types/Pokemons';
import  './styles.css'
import { CardResults } from '@/app/common/card/cardResult';

type ContainerResultsProps = {
  data: Pokemon[] | undefined;
};

export const  ContainerResults = ({ data }: ContainerResultsProps) => {

  return (
    <>

    {data?.map((el,index)=><CardResults key={index} name={el.name} type={el.type} url={el.url} id={el.id}/>)
      
    }
    </>
  );
}
