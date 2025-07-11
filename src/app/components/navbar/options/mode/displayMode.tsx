import { Moon } from './moon/moon';
import  './styles.css'


export const DisplayMode = () => {

  return (
    <>
        <div className='container-search'>
        <Moon isBolean={true}/>
        </div>
    </>
  );
}
