import './style.css'
import Logo from './logo/Logo'
import Language from './language'
import SearchBar from './pokeSearch'


const Navbar = () => {

  return (
    <div className='navbar center-content'>
        <div className='navbar-container center-content'>
          <Logo/>
          <div className='search-navbar center-content'>
            <SearchBar/>                
          </div>
        </div>
    </div>
  )
}

export default Navbar