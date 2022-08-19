import { useEffect,useState } from "react";
import Imgtitle from "./img/Icon_header.png";
import Card from "./components/PokemonCard";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import axios from "axios";
import CardC from "./components/Card-complete"
import './App.css';

const App=()=> {

  const[Pokemons,SetPokemons]=useState([])
  const[getPokemons,setGetPokemons]=useState(`https://pokeapi.co/api/v2/pokemon/`)
  const [searchPoke,setSearchPoke]=useState("");
  const [dataPoke,setdataPoke]=useState([]);

   

  const lookPoke= async ()=>{
    const toArray=[];
  try {
    const url=`https://pokeapi.co/api/v2/pokemon/${searchPoke}`;
    const resp=await axios.get(url);
    toArray.push(resp.data);
    setdataPoke(toArray);
    <Card></Card>
    console.log(resp.data.id, resp.data.name)
  } catch (error) {
    console.log(error);
  }
  }

  const handleChange = e =>{
    setSearchPoke(e.target.value.toLowerCase());
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    lookPoke();
    document.getElementById("modal").style.display="grid";
  }

  const allPokemons= async ()=>{
    const res= await fetch(getPokemons)
    const data= await res.json()

    setGetPokemons(data.next)
    
    function createPokemon (results){
      results.forEach( async pokemon =>{
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        SetPokemons(currentList=> [...currentList, data])
        await Pokemons.sort((a, b) => a.id - b.id)
      })
    } 
    createPokemon(data.results)
  }

  function close(){
    document.getElementById("modal").style.display="none";
  }

  useState(()=>{
    allPokemons()
  },[])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="App">
      <div><Header image={Imgtitle} title="Pokedex" imagef={Imgtitle} poke={handleSubmit} name={handleChange}/>
      </div>
      <div className="container" id='modal-1'>{dataPoke.map((val,num)=> <CardC id={val.id} name={capitalizeFirstLetter(val.name)} imageF={val.sprites.other.home.front_default}  stat1={val.stats[0].base_stat} stat2={val.stats[1].base_stat} stat3={val.stats[2].base_stat} stat4={val.stats[5].base_stat} exp={val.base_experience} weight={val.weight} type={val.types.length === 1 ? <div className="type-pok"><p className={`type type-${val.types[0].type.name}`}>{capitalizeFirstLetter(val.types[0].type.name)}</p></div> : <div className="type-pok"><p className={`type type-${val.types[0].type.name}`}>{capitalizeFirstLetter(val.types[0].type.name)}</p><p p className={`type type-${val.types[1].type.name}`}>{capitalizeFirstLetter(val.types[1].type.name)}</p></div>} click={close} key={num} 
      type1={val.types[0].type.name}/>)}</div>
      <div className="container">
      { Pokemons.map((pokemon,index) => <Card id={pokemon.id} name={capitalizeFirstLetter(pokemon.name)} 
      image={pokemon.sprites.other.home.front_default} 
      type={pokemon.types.length === 1 ? <div className="type-pok"><p className={`type type-${pokemon.types[0].type.name}`}>{capitalizeFirstLetter(pokemon.types[0].type.name)}</p></div> : <div className="type-pok"><p className={`type type-${pokemon.types[0].type.name}`}>{capitalizeFirstLetter(pokemon.types[0].type.name)}</p><p p className={`type type-${pokemon.types[1].type.name}`}>{capitalizeFirstLetter(pokemon.types[1].type.name)}</p></div>} key={index} 
      type1={pokemon.types[0].type.name}/>)}
      </div>
      <div className="Pag">
        <a className="Pag-element" onClick={()=> allPokemons()}>More</a>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

