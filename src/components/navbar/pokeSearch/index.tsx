import './style.css'
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className='search-navbar center-content'>
      <div className='div-input'>
          <div className='input-search'>
              <input type="text" placeholder='Search a pokémon'/>
              <button className='container-icon center-content'>
                <HiOutlineSearch className="icon-search" />
              </button>
          </div>
      </div>
    </div>
  )
}

export default SearchBar