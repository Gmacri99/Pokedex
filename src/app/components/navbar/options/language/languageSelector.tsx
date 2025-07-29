import { ArrowDown } from '@/app/common/arrowSvg';
import { FlagOption } from './Flag/languageSelector';
import  './styles.css'

type Props = {
  handleOpen: (open: boolean) => void
}


export const LanguageSelector = ({ handleOpen }: Props) => {

  const toggleOpen = () => {
    handleOpen(true)
  }

  return (
    <>
        <button onClick={toggleOpen} className='container-language'>
          
          <FlagOption/>

          <ArrowDown/>

        </button>
    </>
  );
}
