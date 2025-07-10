import { Logo } from "./logo/logo";
import { Options } from "./options/options";
import { Search } from "./search/search";
import  './styles.css'


export const Navbar = () => {
  return (
    <>
    <div className="container-navbar">
        <Logo/>
        <Search/>
        <Options/>
    </div>
    </>
  );
}
