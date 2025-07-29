'use client'
import { useState } from 'react';
import { ContainerLanguage } from './language/containerLanguage/containerLanguage';
import { LanguageSelector } from './language/languageSelector';
import { DisplayMode } from './mode/displayMode';
import  './styles.css'


export const Options = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <div className='container-options'>
          <LanguageSelector handleOpen={() => setIsOpen(prev => !prev)}/>
          <DisplayMode/>
          <ContainerLanguage isOpen={isOpen} setIsOpen={()=>setIsOpen(false)}/>
        </div>
    </>
  );
}
