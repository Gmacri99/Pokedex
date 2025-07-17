'use client'

import { useAppContext } from '@/app/context/context';
import { Moon } from './moon/moon';
import  './styles.css'


export const DisplayMode = () => {

    const { darkMode } = useAppContext();

  return (
    <>
        <div className='container-search'>
        <Moon isBolean={darkMode}/>
        </div>
    </>
  );
}
