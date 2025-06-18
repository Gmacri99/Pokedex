import './style.css'
import Logo from './logo/Logo'
import SearchBar from './pokeSearch'
import OptionsNavbar from './options'


const Navbar = () => {

  return (
    <div className='navbar center-content'>
        <div className='navbar-container center-content'>
          <Logo/>          
          <SearchBar/>
          <OptionsNavbar/>                          
        </div>
    </div>
  )
}

export default Navbar