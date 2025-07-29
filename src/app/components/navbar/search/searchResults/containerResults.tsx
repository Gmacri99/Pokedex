'use client'

import { Pokemon } from '@/app/types/Pokemons';
import  './styles.css'
import { CardResults } from '@/app/common/card/cardResult';

type ContainerResultsProps = {
  data: Pokemon[] | undefined;
  status:boolean
};

export const  ContainerResults = ({ data,status }: ContainerResultsProps) => {

  return (
    <>
    <div className={`containerCardsResults ${status ? 'containerCardsResults__active' : 'containerCardsResults__inactive'}`}>
      <div className={`containerCardsResults--container ${status ? 'containerCardsResults--container__active' : 'containerCardsResults--container__inactive'}`}>
        {data?.map((el,index)=><CardResults key={index} name={el.name} type={el.type} url={el.url} id={el.id}/>)}
      </div>
    </div>
    </>
  );
}
