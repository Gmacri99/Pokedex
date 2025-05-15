import { Pokemon } from "../../../interfaces/interfaces"


const CardPokemon = ({name,url,types}:Pokemon) => {
  return (
    <div className="card-pokemon">
        <div className="card-pokemon-info">
            <div>
            <h2>{name}</h2>
            {types?.map((el)=> <div>
              <p>{el.type.name}</p>
            </div>)}
            </div>
            <div>
            <img src={url} alt={name} />
            </div>
            <div>
            <p>a</p>
            </div>
        </div>
    </div>
  )
}

export default CardPokemon