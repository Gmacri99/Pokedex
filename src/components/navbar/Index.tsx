import { useState } from 'react'
import './style.css'
import Logo from './Logo'
import Language from './language'


const Navbar = () => {

    const [color,setColor] = useState('white')

  return (
    <div className='navbar'>
        <div>
            <Logo color={color}/>
            <Language />
            
        </div>
    </div>
  )
}

export default Navbar