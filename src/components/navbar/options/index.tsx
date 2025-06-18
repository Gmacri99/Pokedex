import { useState } from 'react'
import { LanguageSelect, LanguageOption } from '../../../interfaces/interfaces'
import { getLanguage } from '../../../helpers/getData';
import { LanguagesDetails } from '../../../const/Languages';
import './style.css'
import LanguageOptions from './languageSelector/language';
import Mode from './modeSelector/Mode';


const OptionsNavbar = ({ select = 0 }:LanguageOption) => {

    const [language, setLanguage] = useState<LanguageSelect>(LanguagesDetails[select])

    const fetchLanguage = async () => {
        const info = await getLanguage();        
        setLanguage(info?.results)  
      };

  return (
    <div className='container-options center-content'>
      <LanguageOptions language={language}/>
      <Mode/>
    </div>
  )
}

export default OptionsNavbar