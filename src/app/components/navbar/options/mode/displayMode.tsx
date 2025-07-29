'use client'

import { useAppContext } from '@/app/context/context';
import { Moon } from './moon/moon';
import  './styles.css'


export const DisplayMode = () => {

    const { darkMode,toggleDarkMode } = useAppContext();

  return (
    <>
      <div className='containerDisplay'>
        <button onClick={toggleDarkMode} className='containerDisplay--button'>
          <span className={`circle ${darkMode ? 'circle__dark' : 'circle__light'   }`}></span>
          <span ><Moon  isBolean={darkMode}/></span>
        </button>
      </div>
    </>
  );
}
