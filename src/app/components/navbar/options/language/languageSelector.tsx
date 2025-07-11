import { ArrowDown } from '@/app/common/arrowSvg';
import { FlagOption } from './Flag/languageSelector';
import  './styles.css'


export const LanguageSelector = () => {
  return (
    <>
        <button className='container-language'>
          
          <FlagOption/>

          <ArrowDown/>

        </button>
    </>
  );
}
