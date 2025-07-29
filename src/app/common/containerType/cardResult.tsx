import { TypePokemon } from '@/app/types/Pokemons';
import  './styles.css'
import { TypesPokemon } from '@/app/const/types';
import { capitalize, renderIconSpan } from '../functions';


export const  ContainerType = ({type,slot}:TypePokemon) => {

  return (
    <>
        <div className='typeContainer' key={slot}>
            {renderIconSpan(TypesPokemon, type.name,'', (el) => (<span className={`typeContainer--card type__${el.name}`}>{el.svg}</span>))}
            <p className='typeContainer--name'>{capitalize(type.name)}</p>
        </div>
    </>
  );
}
