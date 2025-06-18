import { LanguageSelect } from '../../../../interfaces/interfaces'
import './style.css'

interface Props {
  language: LanguageSelect;
}

const LanguageOptions = ({language}:Props) => {

 
  return (
    <>
      <button className='selector-language center-content'>
        <div>
          {language.image}
        </div>
        <div className='btn-selector'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.12012 8.93604L10.2477 14.0636L15.3752 8.93604" stroke="white" stroke-width="1.70918" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

      </button>
    </>
  )
}

export default LanguageOptions