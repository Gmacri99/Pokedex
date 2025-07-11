import { LanguageSelector } from './language/languageSelector';
import { DisplayMode } from './mode/displayMode';
import  './styles.css'


export const Options = () => {
  return (
    <>
        <div className='container-options'>
          <LanguageSelector/>
          <DisplayMode/>
        </div>
    </>
  );
}
