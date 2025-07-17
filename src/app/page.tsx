import { Navbar } from "./components/navbar";
import { apiRequest } from "./helpers/request/getData";
import UtilsUI from "./helpers/UI";
import  './page.css'
import { Pokemon } from "./types/Pokemons";

export default async function  Home() {



  return (
    <>
      <UtilsUI/>


      <Navbar/>
    </>
  );
}
