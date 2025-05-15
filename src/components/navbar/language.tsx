import React, { useState } from 'react'
import { LanguageSelect, LanguageOption } from '../../interfaces/interfaces'
import { getLanguage } from '../../helpers/getData';
import { LanguagesDetails } from '../../const/Languages';



const Language = ({ select = 1 }:LanguageOption) => {

    const [language, setLanguage] = useState<LanguageSelect>(LanguagesDetails[1])

    const openSelectionLanguage = () =>{

    }

    const fetchLanguage = async () => {
        const info = await getLanguage();        
        setLanguage(info?.results)  
        console.log(select)
      };

  return (
    <>
    <div className='selector-language'>
        <div onClick={openSelectionLanguage} className='selector-language-selected'>
            <figure> <img src={language.image} alt={`flag of ${language.name}`} /> </figure>
            <p>{language.abbreviation}</p>
        </div>
        {/*<div className='list-languages'>
           {LanguagesDetails.map((el) =><div>  {el.name} </div>)} 
        </div>*/}
    </div>
    </>
  )
}

export default Language