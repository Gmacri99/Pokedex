import { Navbar } from "./components/navbar";
import { apiRequest } from "./helpers/request/getData";
import UtilsUI from "./helpers/UI";
import  './page.css'

export default async function  Home() {

  const data = await apiRequest('getAllPokemon')

  console.log(data.results)

  return (
    <>
      <UtilsUI/>


      <Navbar/>
    </>
  );
}
