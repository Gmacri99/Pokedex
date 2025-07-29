'use client'

import { Languages, RouteItem } from '@/app/const/Languages';
import  './styles.css'
import { Language, useAppContext } from '@/app/context/context';
import { useState } from 'react';

type Props = {
  isOpen: boolean
}

export const ContainerLanguage = ({ isOpen }: Props) => {

  const { language,setLanguage } = useAppContext(); 
  const [selectedLanguage, setSelectedLanguage] = useState<Language>()

  const handleChange = (e:Language) =>{
    console.log(e)
    setSelectedLanguage(e)
  }



  return (
    <>

    
      <div className={`containerLanguage ${isOpen ? 'active-container' : 'inactive-container'}`}>
        <div className="containerLanguage--languages">
          {Languages.map((el, index) => {
            const isSelected = !selectedLanguage ? el.name ===language : el.name ===selectedLanguage ;
            return (
              <div key={index} onClick={()=>handleChange(el.name)} className={`containerLanguage--languages--card ${isSelected ? 'active--language__light' : 'inactive--language__light'}`}>
                <span>{el.svg}</span>
                <p>{el.completedName}</p>
              </div>
            );
          })}
        </div>
        <div className='containerLanguage--change'><button onClick={()=>setLanguage(selectedLanguage)} className='containerLanguage--change--button'>Set Language</button></div>
      </div>
    
    </>
  );
}
