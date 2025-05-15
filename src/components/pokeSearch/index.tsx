import './style.css'
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <>
    <div className='div-input'>
        <div className='input-search'>
            <input type="text" placeholder='pokemon'/>
            <HiOutlineSearch className="icon-search" />
        </div>
    </div>
    </>
  )
}

export default SearchBar